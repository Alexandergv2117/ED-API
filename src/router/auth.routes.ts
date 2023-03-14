import { Router } from 'express';
import AuthController from '../controllers/auth.controller';

export default class AuthRouter {
  public router: Router;
  private Controller: AuthController;

  constructor() {
    this.router = Router();
    this.Controller = new AuthController();
    this.initializeRoutes(this.router, this.Controller);
  }

  private initializeRoutes(router: Router, Controller: AuthController) {
    router.get('/login', Controller.login);
    router.post('/login', Controller.login);
  }
}
