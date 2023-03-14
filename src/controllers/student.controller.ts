import { Request, Response } from 'express';
import StudentModel from '../models/student.model';
const Model = new StudentModel();

export default class StudentController {
  public async getTeacherByStudent(
    req: Request,
    res: Response
  ): Promise<Response> {
    try {
      const{matricula,periodoId}= req.params;
      console.log(matricula,periodoId);
      if (!matricula ) return res.status(400).send('Missing matricula');
      if(!periodoId) return res.status(400).send('Missing periodo');
      const periods = await Model.getTeacherByStudent(Number(matricula) , Number(periodoId));
      return res.status(200).send(periods);
    } catch (error: any) {
      return res.status(500).send({ message: error.message });
    }
  }
}
