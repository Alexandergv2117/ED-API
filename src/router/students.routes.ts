import { Router } from 'express';
import StudentController from '../controllers/student.controller';

export default class StudentRouter {
  public router: Router;
  private controller: StudentController;

  constructor() {
    this.router = Router();
    this.controller = new StudentController();

    this.initializeStudentController(this.router, this.controller);
  }

  private initializeStudentController(
    router: Router,
    controller: StudentController,
  ) {
    router.post(
      '/saveAnswer/:encuestaId',
      (req, res) => void controller.saveStudents(req, res),
    );
  }
}
