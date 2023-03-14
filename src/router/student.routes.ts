import { Router } from 'express';
import StudentController from '../controllers/student.controller';

export default class  Student  {
  public router: Router;
  private studentController: StudentController;

  constructor() {
    this.router = Router();
    this.studentController = new StudentController();
    this.initializeStudentRoutes(
      this.router,
      this.studentController
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
    router.get('/professors/:matricula,:periodoId', Controller.getTeacherByStudent) ;

  }

}
