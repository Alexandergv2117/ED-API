import { Router } from 'express';
import { upload } from '../middlewares/multer.middleware';
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

    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    router.post('/upload', upload, Controller.uploadDBF);
  }
}
