import { Request, Response } from 'express';
import QuestionModel from '../models/questions.model';
const Model = new QuestionModel();

export default class QuestionController {
  public async getQuestionByStudent(
    req: Request,
    res: Response
  ): Promise<Response> {
    try {
      const { idQuestion } = req.params;
      console.log(idQuestion);
      if (!idQuestion) return res.status(400).send('Missing idQuestion');

      const periods = await Model.getQuestionByStudent(Number(idQuestion));

      return res.status(200).send(periods);
    } catch (error: any) {
      return res.status(500).send({ message: error.message });
    }
  }


}