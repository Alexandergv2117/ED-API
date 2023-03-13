/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Request, Response } from 'express';
import { delFolderTemp, upload } from '../middlewares/multer.middleware'; // Importa el middleware de multer
import Model from '../models/admin.model';
import ErrorHandlerMiddleware, { HandleModelErrorType } from '../middlewares/errorHandler.middleware';
import { DBFFile } from 'dbffile';
import path from 'path';
interface IDBFunction {
  status: number;
  message: string;
}
export default class AdminController {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private handleModelError: HandleModelErrorType<any[], any> = ErrorHandlerMiddleware.handleModelError;
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
              .then((dbf) => {
                dbf
                  .readRecords()
                  .then(async (records) => {
                    console.log(`Registros: ${records.length}`);

                    await this.registerStudents(records);
                  })
                  .catch((error) => {
                    console.log(`Error al leer registros: ${error.message}`);
                  });
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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private registerStudents = async (fields: any[]) => {
    await this.handleModelError(Model.registerStudents)(fields);
  };
}
