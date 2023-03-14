import db from '../db/config';

export default class Student {
  public async saveAnswers(
    encuestaId: number,
    questionId: number,
    cuestionarioAd: number,
    value: number
  ) {
    const res = await db.sequelize.query('CALL saveAnswer(?,?,?,?)', {
      replacements: [encuestaId, questionId, cuestionarioAd, value],
      type: 'RAW'
    });
    return res;
  }
}
