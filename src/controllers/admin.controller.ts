import { Request, Response } from 'express';
import fs from 'fs';

import Admin from '../models/admin.model';

export default class AdminController {
  private directorio = './uploads';

  public uploadDBF = async (req: Request, res: Response) => {
    try {
      const files = (await this.leerArchivosEnDirectorio()) as string[];

      if (files.length === 0) {
        return res.status(400).send({
          message: 'No se recibieron archivos'
        });
      }

      await Admin.registerStudents(`${this.directorio}/DALUMN.DBF`);

      res.status(200).send('Archivos recibidos');
    } catch (error) {
      console.error(error);
      res.status(500).send({
        message: 'Error en el servidor'
      });
    }
  };

  private leerArchivosEnDirectorio = () =>
    new Promise((resolve) => {
      fs.readdir(this.directorio, (error, archivos) => {
        if (error) {
          resolve([]);
        } else {
          resolve(archivos);
        }
      });
    });
}
