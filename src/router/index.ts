import { Router } from 'express';
import AuthRouter from './auth.routes';
import CoordinatorRoutes from './coordinators.routes';

export default class RouterAPI {
    public router: Router;
    // add more routes here
    private authRouter: AuthRouter;
    private coordinatorRoutes: CoordinatorRoutes;

    constructor() {
        this.router = Router();
        // add more routes here
        this.authRouter = new AuthRouter();
        this.coordinatorRoutes = new CoordinatorRoutes();

        this.initializeRoutes(
            // add more routes here
            this.authRouter,
            this.coordinatorRoutes,
        );
    }

    private initializeRoutes(
        // add more routes here
        authRouter: AuthRouter,
        coordinatorRoutes: CoordinatorRoutes,
    ) {
        this.router.use('/auth', authRouter.router);
        this.router.use('/coordinators', coordinatorRoutes.router);
    }
}
