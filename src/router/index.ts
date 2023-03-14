import { Router } from 'express';
import AuthRouter from './auth.routes';
import CoordinatorRoutes from './coordinators.routes';
import AdminRoutes from './admin.routes';
import QuestionRoutes from './questions.routes';

export default class RouterAPI {
  public router: Router;
  // add more routes here
  private authRouter: AuthRouter;
  private coordinatorRoutes: CoordinatorRoutes;
  private adminRoutes: AdminRoutes;
  private questionRoutes: QuestionRoutes;
  
  constructor() {
    this.router = Router();
    // add more routes here
    this.authRouter = new AuthRouter();
    this.coordinatorRoutes = new CoordinatorRoutes();
    this.adminRoutes = new AdminRoutes();
    this.questionRoutes = new QuestionRoutes();

    this.initializeRoutes(
      // add more routes here
      this.authRouter,
      this.coordinatorRoutes,
      this.adminRoutes,
      this.questionRoutes
    );
  }

  private initializeRoutes(
    // add more routes here
    authRouter: AuthRouter,
    coordinatorRoutes: CoordinatorRoutes,
    adminRoutes: AdminRoutes,
    questionRoutes: QuestionRoutes
  ) {
    this.router.use('/auth', authRouter.router);
    this.router.use('/coordinator', coordinatorRoutes.router);
    this.router.use('/admin', adminRoutes.router);
    this.router.use('/question', questionRoutes.router);
  
  }
}
