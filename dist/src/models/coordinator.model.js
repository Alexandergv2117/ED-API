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
const config_1 = __importDefault(require("../db/config"));
class Coordinator {
    getPeriodsByCareer(carreraId) {
        return __awaiter(this, void 0, void 0, function* () {
            return config_1.default.sequelize
                .query('CALL getAverageByCareer(?)', {
                replacements: [carreraId],
                type: 'RAW'
            })
                .then((res) => res)
                .catch((error) => {
                console.log(error);
                return [];
            });
        });
    }
    getGroupsByProfesor(profesorId) {
        return __awaiter(this, void 0, void 0, function* () {
            return config_1.default.sequelize
                .query('CALL getGroupsByTeacher(?)', {
                replacements: [profesorId],
                type: 'RAW'
            })
                .then((res) => res)
                .catch((error) => {
                console.log(error);
                return [];
            });
        });
    }
    getProfesorsAverageByPeriod(periodId) {
        return __awaiter(this, void 0, void 0, function* () {
            return config_1.default.sequelize
                .query('CALL getTeachersAverageByPeriod(?)', {
                replacements: [periodId],
                type: 'RAW'
            })
                .then((res) => res)
                .catch((error) => {
                console.log(error);
                return [];
            });
        });
    }
    getAverageGroupByCarrer(careerId) {
        return __awaiter(this, void 0, void 0, function* () {
            return config_1.default.sequelize
                .query('CALL getAverageGroupByCarrer(?)', {
                replacements: [careerId],
                type: 'RAW'
            })
                .then((res) => res)
                .catch((error) => {
                console.log(error);
                return [];
            });
        });
    }
    getAverageQuestionByGroup(groupId) {
        return __awaiter(this, void 0, void 0, function* () {
            return config_1.default.sequelize
                .query('CALL getAverageQuestionByGroup(?)', {
                replacements: [groupId],
                type: 'RAW'
            })
                .then((res) => res)
                .catch((error) => {
                console.log(error);
                return [];
            });
        });
    }
    getStudentsByGroup(groupId) {
        return __awaiter(this, void 0, void 0, function* () {
            return config_1.default.sequelize
                .query('CALL getStudentsByGroup(?)', {
                replacements: [groupId],
                type: 'RAW'
            })
                .then((res) => res)
                .catch((error) => {
                console.log(error);
                return [];
            });
        });
    }
}
exports.default = Coordinator;
//# sourceMappingURL=coordinator.model.js.map