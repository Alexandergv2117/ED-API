import { Request, Response } from 'express';
import { delFolderTemp, upload } from '../middlewares/multer.middleware'; // Importa el middleware de multer
// import Model from '../models/admin.model';
import { DBFFile, FieldDescriptor } from 'dbffile';
import path from 'path';
interface IDBFunction {
  status: number;
  message: string;
}
interface IDBF extends FieldDescriptor {
  name: string;
}
export default class AdminController {
  public uploadDBF = async (req: Request, res: Response): Promise<Response> => {
    // Usa el middleware de multer para manejar la subida de los archivos
    const localres = await new Promise<IDBFunction>((resolve, reject) => {
      upload(req, res, (err: unknown) => {
        if (err) {
          console.log(err);
          reject({ status: 400, message: 'Error uploading file(s).' });
        } else {
          console.log(req.files);
          if (!req.files || Object.keys(req.files).length === 0) {
            reject({ status: 400, message: 'No file(s) were uploaded.' });
          } else {
            // Aquí puedes acceder a los archivos subidos en `req.files`
            // ejemplo de uso de archivo dbf dalumn.dbf
            DBFFile.open(path.join('uploads', 'DALUMN.DBF'))
              .then(async (dbf) => {
                console.log(`DBF file contains ${dbf.recordCount} records.`);
                console.log(dbf.fields[0]);
                console.log(`Field names: ${dbf.fields.map((f: IDBF) => f.name).join(', ')}`);
                let count = 0;
                for await (const record of dbf) {
                  console.log(record);
                  count++;
                  if (count === 2) break;
                }
                delFolderTemp();
                resolve({ status: 200, message: 'Archivos recibidos' });
              })
              .catch((error) => {
                console.log(error);
                reject({ status: 500, message: error.message });
              });
          }
        }
      });
    });
    return res.status(localres.status).send({ message: localres.message });
  };
}
