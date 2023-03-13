import { DBFFile } from 'dbffile';
import { Student } from '../db/models/Student';
import { Subject } from '../db/models/Subject';
import { deleteFile } from '../lib/files';

class Admin {
  public uploadDBF(data: unknown) {
    console.log(data);
    return 'Archivos recibidos desde model admin';
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public registerStudents = async (dir: string) => {
    try {
      const table = await DBFFile.open(dir, { encoding: 'utf-8' });
      const rows = await table.readRecords();
      const data = rows.map((row) => ({
        matricula: row.ALUCTR,
        nombre: row.ALUNOM,
        apellido_paterno: row.ALUAPP,
        apellido_materno: row.ALUAPM
      }));

      await Student.bulkCreate(data, { ignoreDuplicates: true });

      deleteFile(dir);

      console.log('Estudiantes registrados exitosamente!');
    } catch (error) {
      console.log('Error al registrar estudiantes:', error);
    }
  };

  public registerSubjects = async (dir: string) => {
    try {
      const fileSubject = await DBFFile.open(dir, { encoding: 'utf-8' });
      const rows = await fileSubject.readRecords();
      const data = rows.map((row) => ({
        nombre_materia: row.MATNOM,
        nombre_corto_materia: row.MATCVE
      }));
      console.table(data);

      await Subject.bulkCreate(data, { ignoreDuplicates: true });

      deleteFile(dir);

      console.log('Materias registradas correctamente');

    } catch (error) {
      console.log(`Error al registrar las materias: ${error}`);
    }
  };
}

export default new Admin();
