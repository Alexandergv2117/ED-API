import { Router } from 'express';

export default class RouterAPI {
    public router: Router;

    constructor() {
        this.router = Router();


        this.initializeRoutes(
        );
    }

    private initializeRoutes(
    ) {
    }
}

