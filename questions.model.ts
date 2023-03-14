import db from '../db/config';

export default class Questions {
  public async getQuestionByStudent(idQuestion: number) {
    return db.sequelize
      .query('CALL getQuestionByStudent(?)', {
        replacements: [idQuestion],
        type: 'RAW'
      })
      .then((res) => res)
      .catch((error) => {
        console.log(error);
        return [];
      });
  }

  
}
