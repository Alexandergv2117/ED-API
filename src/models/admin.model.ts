import { DBFFile } from 'dbffile';
import { Student } from '../db/models/Student';
import { deleteFile } from '../lib/files';

class Admin {
  public uploadDBF(data: unknown) {
    console.log(data);
    return 'Archivos recibidos desde model admin';
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public registerStudents = async (directorio: string) => {
    try {
      const table = await DBFFile.open(directorio, { encoding: 'utf-8' });
      const rows = await table.readRecords();
      const data = rows.map((row) => ({
        matricula: row.ALUCTR,
        nombre: row.ALUNOM,
        apellido_paterno: row.ALUAPP,
        apellido_materno: row.ALUAPM
      }));

      await Student.bulkCreate(data, { ignoreDuplicates: true });

      deleteFile(directorio);

      console.log('Estudiantes registrados exitosamente!');
    } catch (error) {
      console.log('Error al registrar estudiantes:', error);
    }
  };
}

export default new Admin();
