import { Router } from 'express';
import AuthRouter from './auth.routes';

export default class RouterAPI {
    public router: Router;
    // add more routes here
    private authRouter: AuthRouter;

    constructor() {
        this.router = Router();
        // add more routes here
        this.authRouter = new AuthRouter();

        this.initializeRoutes(this.authRouter);
    }

    private initializeRoutes(
        // add more routes here
        authRouter: AuthRouter,
    ) {
        this.router.use('/auth', authRouter.router);
    }
}
