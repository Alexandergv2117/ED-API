import { Router } from 'express';
import StudentController from '../controllers/student.controller';

export default class  Student  {
  public router: Router;
  private StudentController: StudentController;

  constructor() {
    this.router = Router();
    this.StudentController = new StudentController();
    this.initializeStudentRoutes(
      this.router,
      this.StudentController
    );
  }

  private initializeStudentRoutes(
    router: Router,
    Controller: StudentController
  ) {
    router.get('/', (req, res) => {
      res.send('Hello World!');
    });
    // master rute
    router.get('/student/professors/:matricula ', Controller.getTeacherByStudent);
  }
}
