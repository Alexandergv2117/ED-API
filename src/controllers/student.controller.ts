import { Request, Response } from 'express';
import StudentModel from '../models/student.model';
const Model = new StudentModel();

export default class StudentController {
  public async saveStudents(req: Request, res: Response): Promise<Response> {
    try {
      const { encuestaId } = req.params;
      const { questionId, cuestionarioAd, value } = req.body;

      if (!encuestaId)
        return res.status(404).send({ message: 'encuestaId undefined' });

      if (!questionId || !cuestionarioAd || !value)
        return res.status(404).send({ message: 'params null' });

      const status = await Model.saveAnswers(
        Number(encuestaId),
        Number(questionId),
        Number(cuestionarioAd),
        Number(value),
      );

      return res.status(200).send(status);
    } catch (error: any) {
      return res.status(500).send({ message: error.message });
    }
  }
}
