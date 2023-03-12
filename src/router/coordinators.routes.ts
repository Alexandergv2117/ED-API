/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable indent */
import { Router } from 'express';
import CoordinatorController from '../controllers/coordinators.controller';
import ErrorHandlerMiddleware from '../middlewares/errorHandler.middleware';

export default class CoordinatorRoutes {
  public router: Router;
  private coordinatorController: CoordinatorController;
  private errorHandlerServer = ErrorHandlerMiddleware.handleControllerError;

  constructor() {
    this.router = Router();
    this.coordinatorController = new CoordinatorController();
    this.initializeCoordinatorRoutes(this.router, this.coordinatorController);
  }

  private initializeCoordinatorRoutes = (router: Router, Controller: CoordinatorController) => {
    router.get('/', (req, res) => {
      res.send('Hello World!');
    });

    // master rute
    // periodos por carrera 1
    router.get('/periods/:careerId', this.errorHandlerServer(Controller.getPeriodsByCareer));

    // grupos por profesor 3
    router.get('/groups/:profesorId', this.errorHandlerServer(Controller.getGroupsByProfesor));

    // profesores por periodo 2
    router.get('/profesors/average/:periodId', Controller.getProfesorsAverageByPeriod);

    // grupos por carrera 4
    router.get('/groups/average/:careerId', this.errorHandlerServer(Controller.getAverageGroupByCarrer));

    //promedio de preguntas por grupo 5
    router.get('/questions/average/:groupId', this.errorHandlerServer(Controller.getAverageQuestionByGroup));

    //lista de alumnos por grupo 6
    router.get('/student/list/:groupId', this.errorHandlerServer(Controller.getStudentsByGroup));
  };
}
