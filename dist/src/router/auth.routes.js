"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = __importDefault(require("../controllers/auth.controller"));
class AuthRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.Controller = new auth_controller_1.default();
        this.initializeRoutes(this.router, this.Controller);
    }
    initializeRoutes(router, Controller) {
        router.get('/login', Controller.login);
        router.post('/login', Controller.login);
    }
}
exports.default = AuthRouter;
//# sourceMappingURL=auth.routes.js.map