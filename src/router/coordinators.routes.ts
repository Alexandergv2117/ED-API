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
            this.coordinatorController,
        );
    }

    private initializeCoordinatorRoutes(
        router: Router,
        Controller: CoordinatorController,
    ) {
        router.get('/', (req, res) => {
            res.send('Hello World!');
        });
        router.get('/periods/:careerId', Controller.getPeriodsByCareer);
    }
}
