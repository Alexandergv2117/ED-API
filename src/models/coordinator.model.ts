import db from '../db/config';

export default class Coordinator {
  public getPeriodsByCareer = (carreraId: number) =>
    db.sequelize.query('CALL getAverageByCareer(?)', {
      replacements: [carreraId],
      type: 'RAW'
    });

  public getGroupsByProfesor = (profesorId: number) =>
    db.sequelize.query('CALL getGroupsByTeacher(?)', {
      replacements: [profesorId],
      type: 'RAW'
    });

  public getProfesorsAverageByPeriod = (periodId: number) =>
    db.sequelize.query('CALL getTeachersAverageByPeriod(?)', {
      replacements: [periodId],
      type: 'RAW'
    });

  public getAverageGroupByCarrer = (careerId: number) =>
    db.sequelize.query('CALL getAverageGroupByCarrer(?)', {
      replacements: [careerId],
      type: 'RAW'
    });

  public getAverageQuestionByGroup = (groupId: number) =>
    db.sequelize.query('CALL getAverageQuestionByGroup(?)', {
      replacements: [groupId],
      type: 'RAW'
    });

  public getStudentsByGroup = (groupId: number) =>
    db.sequelize.query('CALL getStudentsByGroup(?)', {
      replacements: [groupId],
      type: 'RAW'
    });
}
