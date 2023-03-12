import { Router } from 'express';
import CoordinatorController from '../controllers/coordinators.controller';

export default class CoordinatorRoutes {
  public router: Router;
  private coordinatorController: CoordinatorController;

  constructor() {
    this.router = Router();
    this.coordinatorController = new CoordinatorController();
    this.initializeCoordinatorRoutes(
      this.router,
      this.coordinatorController
    );
  }

  private initializeCoordinatorRoutes(
    router: Router,
    Controller: CoordinatorController
  ) {
    router.get('/', (req, res) => {
      res.send('Hello World!');
    });
    // master rute
    // periodos por carrera 1
    router.get('/periods/:careerId', Controller.getPeriodsByCareer);
    // grupos por profesor 3
    router.get('/groups/:profesorId', Controller.getGroupsByProfesor);
    // profesores por periodo 2
    router.get(
      '/profesors/average/:periodId',
      Controller.getProfesorsAverageByPeriod
    );
    // grupos por carrera 4
    router.get(
      '/groups/average/:careerId',
      Controller.getAverageGroupByCarrer
    );
    //promedio de preguntas por grupo 5
    router.get(
      '/questions/average/:groupId',
      Controller.getAverageQuestionByGroup
    );
    //lista de alumnos por grupo 6
    router.get('/student/list/:groupId', Controller.getStudentsByGroup);
  }
}
