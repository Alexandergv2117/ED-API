"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const coordinators_controller_1 = __importDefault(require("../controllers/coordinators.controller"));
class CoordinatorRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.coordinatorController = new coordinators_controller_1.default();
        this.initializeCoordinatorRoutes(this.router, this.coordinatorController);
    }
    initializeCoordinatorRoutes(router, Controller) {
        router.get('/', (req, res) => {
            res.send('Hello World!');
        });
        // master rute
        // periodos por carrera 1
        router.get('/periods/:careerId', Controller.getPeriodsByCareer);
        // grupos por profesor 3
        router.get('/groups/:profesorId', Controller.getGroupsByProfesor);
        // profesores por periodo 2
        router.get('/profesors/average/:periodId', Controller.getProfesorsAverageByPeriod);
        // grupos por carrera 4
        router.get('/groups/average/:careerId', Controller.getAverageGroupByCarrer);
        //promedio de preguntas por grupo 5
        router.get('/questions/average/:groupId', Controller.getAverageQuestionByGroup);
        //lista de alumnos por grupo 6
        router.get('/student/list/:groupId', Controller.getStudentsByGroup);
    }
}
exports.default = CoordinatorRoutes;
//# sourceMappingURL=coordinators.routes.js.map