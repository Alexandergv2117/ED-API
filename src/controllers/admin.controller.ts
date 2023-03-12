import { Request, Response } from 'express';
import { delFolderTemp, upload } from '../middlewares/multer.middleware'; // Importa el middleware de multer
import Model from '../models/admin.model';
import { DBFFile } from 'dbffile';
import path from 'path';
export default class AdminController {
  public async uploadDBF(
    req: Request,
    res: Response
  ): Promise<Response | void> {
    try {
      // Usa el middleware de multer para manejar la subida de los archivos
      const localres = upload(req, res, async (err: any) => {
        if (err) {
          console.log(err);
          return res
            .status(400)
            .send({ message: 'Error uploading file(s).' });
        }

        console.log(req.files);
        if (!req.files || Object.keys(req.files).length === 0) {
          return res
            .status(400)
            .send({ message: 'No file(s) were uploaded.' });
        }
        // Aquí puedes acceder a los archivos subidos en `req.files`
        // ejemplo de uso de archivo dbf dalumn.dbf
        const dbf = await DBFFile.open(
          path.join('uploads', 'DALUMN.DBF')
        );
        console.log(`DBF file contains ${dbf.recordCount} records.`);
        console.log(
          `Field names: ${dbf.fields.map((f) => f.name).join(', ')}`
        );
        let count = 0;
        for await (const record of dbf) {
          console.log(record);
          count++;
          if (count === 10) break;
        }
        delFolderTemp();
      });
    } catch (error: any) {
      console.log(error);
      return res.status(500).send({ message: error.message });
    }
  }
}
