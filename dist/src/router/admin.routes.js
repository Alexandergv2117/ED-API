"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const admin_controller_1 = __importDefault(require("../controllers/admin.controller"));
class AdminRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.adminController = new admin_controller_1.default();
        this.initializeAdminRoutes(this.router, this.adminController);
    }
    initializeAdminRoutes(router, Controller) {
        router.get('/', (req, res) => {
            res.send('Hello World! from admin');
        });
        router.post('/upload', Controller.uploadDBF);
    }
}
exports.default = AdminRoutes;
//# sourceMappingURL=admin.routes.js.map