import { DBFFile } from 'dbffile';
import { Student } from '../db/models/Student';
import { Subject } from '../db/models/Subject';
import { Group } from '../db/models/Group';
import { Period } from '../db/models/Period';
import { Teacher } from '../db/models/Teacher';

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

      console.log('Estudiantes registrados exitosamente!');
    } catch (error) {
      console.log('Error al registrar estudiantes:', error);
    }
  };

  public registerSubjects = async (dir: string) => {
    try {
      const fileSubject = await DBFFile.open(dir, { encoding: 'utf-8' });
      const rows = await fileSubject.readRecords();

      const existingSubjects = await Subject.findAll({ attributes: ['nombre_materia'] });
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      const existingSubjectNames = existingSubjects.map((subject: any) => subject.nombre_materia);

      const newData = rows
        .filter((row) => !existingSubjectNames.includes(row.MATNOM))
        .map((row) => ({
          nombre_materia: row.MATNOM,
          nombre_corto_materia: row.MATCVE
        }));

      await Subject.bulkCreate(newData);

      console.log('Materias registradas correctamente');
    } catch (error) {
      console.log(`Error al registrar las materias: ${error}`);
    }
  };

  public registerGroupAndPeriod = async (dir: string) => {
    try {
      const file = await DBFFile.open(dir, { encoding: 'utf-8' });
      const rows = await file.readRecords();

      const existingGroups = await Group.findAll({ attributes: ['clave_grupo', 'id_carrera'] });
      const existingGroupKeys = existingGroups.map((group: any) => `${group.clave_grupo}_${group.id_carrera}`);

      const newData = rows
        .map((row) => ({
          clave_grupo: row.GPOCVE,
          id_carrera: row.CARCVE === null || row.CARCVE === 0 ? 1 : row.CARCVE
        }))
        .filter((group, index, arr) => {
          const key = `${group.clave_grupo}_${group.id_carrera}`;
          return (
            !existingGroupKeys.includes(key) &&
            group.id_carrera !== null &&
            arr.findIndex((g) => g.clave_grupo === group.clave_grupo) === index
          );
        });

      await Group.bulkCreate(newData);

      const period = rows.map((row) => ({
        id_periodo: row.PDOCVE,
        Estado: 0
      }));

      await Period.bulkCreate(period, { ignoreDuplicates: true });

      console.log('Periodos y Grupos registrados correctamente');
    } catch (error) {
      console.log(`Error al registrar los grupos y periodos: ${error}`);
    }
  };

  public registerTeacher = async (dir: string) => {
    try {
      const file = await DBFFile.open(dir, { encoding: 'utf-8' });
      const rows = await file.readRecords();

      const data = rows.map((row) => ({
        id_docente: row.PERCVE,
        nombre: row.PERNOM,
        apellido_materno: row.PERAPM,
        apellido_paterno: row.PERAPP
      }));

      await Teacher.bulkCreate(data, { ignoreDuplicates: true });

      console.log('Doscentes registrados correctamente');
    } catch (error) {
      console.log(`Error al registrar los grupos y periodos: ${error}`);
    }
  };
}

export default new Admin();
