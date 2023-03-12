/* eslint-disable max-len */
import { Router } from 'express';
import AdminController from '../controllers/admin.controller';
import ErrorHandlerMiddleware from '../middlewares/errorHandler.middleware';

export default class AdminRoutes {
  public router: Router;
  private adminController: AdminController;
  private errorHandlerServer = ErrorHandlerMiddleware.handleControllerError;

  constructor() {
    this.router = Router();
    this.adminController = new AdminController();
    this.initializeAdminRoutes(this.router, this.adminController);
  }

  private initializeAdminRoutes(router: Router, Controller: AdminController) {
    router.get('/', (req, res) => {
      res.send('Hello World! from admin');
    });
    // verificar el funcionamiento de promesas
    /*
    La advertencia que estás viendo es un problema con eslint y las promesas mal utilizadas, lo que significa que eslint está detectando que se está utilizando una promesa de manera inadecuada en algún lugar del código. En este caso, parece que la promesa se está utilizando correctamente.
    */
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    router.post('/upload', this.errorHandlerServer(Controller.uploadDBF));
  }
}
