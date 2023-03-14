import db from '../db/config';

export default class Coordinator {
  public async getPeriodsByCareer(carreraId: number) {
    return db.sequelize
      .query('CALL getAverageByCareer(?)', {
        replacements: [carreraId],
        type: 'RAW'
      })
      .then((res) => res)
      .catch((error) => {
        console.log(error);
        return [];
      });
  }

  public async getGroupsByProfesor(profesorId: number) {
    return db.sequelize
      .query('CALL getGroupsByTeacher(?)', {
        replacements: [profesorId],
        type: 'RAW'
      })
      .then((res) => res)
      .catch((error) => {
        console.log(error);
        return [];
      });
  }

  public async getProfesorsAverageByPeriod(periodId: number) {
    return db.sequelize
      .query('CALL getTeachersAverageByPeriod(?)', {
        replacements: [periodId],
        type: 'RAW'
      })
      .then((res) => res)
      .catch((error) => {
        console.log(error);
        return [];
      });
  }
  public async getAverageGroupByCarrer(careerId: number) {
    return db.sequelize
      .query('CALL getAverageGroupByCarrer(?)', {
        replacements: [careerId],
        type: 'RAW'
      })
      .then((res) => res)
      .catch((error) => {
        console.log(error);
        return [];
      });
  }
  public async getAverageQuestionByGroup(groupId: number) {
    return db.sequelize
      .query('CALL getAverageQuestionByGroup(?)', {
        replacements: [groupId],
        type: 'RAW'
      })
      .then((res) => res)
      .catch((error) => {
        console.log(error);
        return [];
      });
  }
  public async getStudentsByGroup(groupId: number) {
    return db.sequelize
      .query('CALL getStudentsByGroup(?)', {
        replacements: [groupId],
        type: 'RAW'
      })
      .then((res) => res)
      .catch((error) => {
        console.log(error);
        return [];
      });
  }
}
