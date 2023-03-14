"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const coordinator_model_1 = __importDefault(require("../models/coordinator.model"));
const Model = new coordinator_model_1.default();
class CoordinatorController {
    getPeriodsByCareer(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { careerId } = req.params;
                console.log(careerId);
                if (!careerId)
                    return res.status(400).send('Missing careerId');
                const periods = yield Model.getPeriodsByCareer(Number(careerId));
                return res.status(200).send(periods);
            }
            catch (error) {
                return res.status(500).send({ message: error.message });
            }
        });
    }
    getGroupsByProfesor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { profesorId } = req.params;
                if (!profesorId)
                    return res.status(400).send({ Error: 'Missing profesorId' });
                const groups = yield Model.getGroupsByProfesor(Number(profesorId));
                return res.status(200).send(groups);
            }
            catch (error) {
                return res.status(500).send({ message: error.message });
            }
        });
    }
    getProfesorsAverageByPeriod(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { periodId } = req.params;
                if (!periodId)
                    return res.status(400).send({ Error: 'Missing periodId' });
                const averageProfesors = yield Model.getProfesorsAverageByPeriod(Number(periodId));
                return res.status(200).send(averageProfesors);
            }
            catch (error) {
                return res.status(500).send({ message: error.message });
            }
        });
    }
    getAverageGroupByCarrer(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { careerId } = req.params;
                if (!careerId)
                    return res.status(400).send({ Error: 'Missing careerId' });
                const averageProfesors = yield Model.getAverageGroupByCarrer(Number(careerId));
                return res.status(200).send(averageProfesors);
            }
            catch (error) {
                return res.status(500).send({ message: error.message });
            }
        });
    }
    getAverageQuestionByGroup(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { groupId } = req.params;
                if (!groupId)
                    return res.status(400).send({ Error: 'Missing groupId' });
                const averageProfesors = yield Model.getAverageQuestionByGroup(Number(groupId));
                return res.status(200).send(averageProfesors);
            }
            catch (error) {
                return res.status(500).send({ message: error.message });
            }
        });
    }
    getStudentsByGroup(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { groupId } = req.params;
                if (!groupId)
                    return res.status(404).send({ Error: 'Missing groupId' });
                const studentList = yield Model.getStudentsByGroup(Number(groupId));
                return res.status(200).send(studentList);
            }
            catch (error) {
                return res.status(500).send({ message: error.message });
            }
        });
    }
}
exports.default = CoordinatorController;
//# sourceMappingURL=coordinators.controller.js.map