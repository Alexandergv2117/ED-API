import db from '../db/config';
export default class Student {
  public async getTeacherByStudent(matricula: number , idperiodo: number) {
    return db.sequelize
      .query('CALL getTeacherByStudent(?,?)', {
        replacements: [matricula,idperiodo],
        type: 'RAW'
      })
      .then((res) => res)
      .catch((error) => {
        console.log(error);
        return [];
      });
  }

  
}
