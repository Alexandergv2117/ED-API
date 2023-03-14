import db from '../db/config';
export default class Student {
  public async getTeacherByStudent(matricula: Number , periodoId: Number) {
    return db.sequelize
      .query('CALL getTeacherByStudent(?,?)', {
        replacements: [matricula,periodoId],
        type: 'RAW'
      })
      .then((res) => res)
      .catch((error) => {
        console.log(error);
        return [];
      });
  }

  
}
