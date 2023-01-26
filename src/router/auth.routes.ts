import { Router } from "express";
import AuthController from "controllers/auth.controller";

export default class AuthRouter {
    public router: Router;
    private Controller: AuthController;

    constructor() {
        this.router = Router();
        this.Controller = new AuthController();
        this.initializeRoutes(this.router, this.Controller);
    }

    private initializeRoutes(router: Router, Controller: AuthController) {
        router.route("/")
            .get((req, res) => {
                res.send("getUser Data");
            })
            .post((req, res) => {
                res.send("create user");
            })
            .put((req, res) => {
                res.send("modify account");
            })
            .delete((req, res) => {
                res.send("delete account");
            })

        router.post("/login", Controller.login);
    }
}