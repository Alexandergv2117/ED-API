import { Router } from 'express';
import AuthRouter from './auth.routes';
import CoordinatorRoutes from './coordinators.routes';
import AdminRoutes from './admin.routes';

export default class RouterAPI {
    public router: Router;
    // add more routes here
    private authRouter: AuthRouter;
    private coordinatorRoutes: CoordinatorRoutes;
    private adminRoutes: AdminRoutes;

    constructor() {
        this.router = Router();
        // add more routes here
        this.authRouter = new AuthRouter();
        this.coordinatorRoutes = new CoordinatorRoutes();
        this.adminRoutes = new AdminRoutes();

        this.initializeRoutes(
            // add more routes here
            this.authRouter,
            this.coordinatorRoutes,
            this.adminRoutes
        );
    }

    private initializeRoutes(
        // add more routes here
        authRouter: AuthRouter,
        coordinatorRoutes: CoordinatorRoutes,
        adminRoutes: AdminRoutes,
    ) {
        this.router.use('/auth', authRouter.router);
        this.router.use('/coordinators', coordinatorRoutes.router);
        this.router.use('/admin', adminRoutes.router);
    }
}
