import { Router } from 'express';
import AdminController from '../controllers/admin.controller';
import { upload } from '../middlewares/multer.middleware';

export default class AdminRoutes {
  public router: Router;
  private adminController: AdminController;

  constructor() {
    this.router = Router();
    this.adminController = new AdminController();
    this.initializeAdminRoutes(this.router, this.adminController);
  }

  private initializeAdminRoutes(router: Router, Controller: AdminController) {
    router.get('/', (req, res) => {
      res.send('Hello World! from admin');
    });
    router.post('/upload', Controller.uploadDBF);
  }
}
