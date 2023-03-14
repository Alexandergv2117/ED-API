import { Request, Response } from 'express';
import { deleteDir, leerArchivosEnDirectorio } from '../lib/files';
import Admin from '../models/admin.model';

export default class AdminController {
  private directorio = './uploads';

  public uploadDBF = async (req: Request, res: Response) => {
    try {
      const files = (await leerArchivosEnDirectorio(this.directorio)) as string[];

      if (files.length === 0) {
        return res.status(400).send({
          message: 'No se recibieron archivos'
        });
      }

      if (files.length < 5) {
        return res.status(400).send({
          message: 'No se recibieron los 5 archivos'
        });
      }
      
      await Admin.registerStudents(`${this.directorio}/DALUMN.DBF`);
      await Admin.registerGroupAndPeriod(`${this.directorio}/DGRUPO.DBF`);
      await Admin.registerSubjects(`${this.directorio}/DMATER.DBF`);
      await Admin.registerTeacher(`${this.directorio}/DPERSO.DBF`);

      deleteDir(this.directorio);

      res.status(200).send('Archivos recibidos');
    } catch (error) {
      console.error(error);
      res.status(500).send({
        message: 'Error en el servidor'
      });
    }
  };
}
