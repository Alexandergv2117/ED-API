import { Student } from '../db/models/Student';

class Admin {
  public uploadDBF(data: unknown) {
    console.log(data);
    return 'Archivos recibidos desde model admin';
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public registerStudents = async (studentsData: any[]) => {
    const mappedData = studentsData.map((data) => ({
      matricula: data.ALUCTR,
      apellido_paterno: data.ALUAPP,
      apellido_materno: data.ALUAPM,
      nombre: data.ALUNOM
    }));
    await Student.bulkCreate(mappedData, {
      ignoreDuplicates: true
    })
      .then(() => {
        console.log('Estudiantes registrados exitosamente!');
      })
      .catch((error) => {
        console.log('Error al registrar estudiantes:', error);
      });
  };
}

export default new Admin();
