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
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../../db/config"));
class QuarterDetail extends sequelize_1.Model {
    migration() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield QuarterDetail.findAll();
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
QuarterDetail.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    periodo_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    carrera_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    personal_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    materia_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    grupo: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    plan_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'periodo_detalle',
    sequelize: config_1.default.getSequelizeMigration(),
    timestamps: false
});
exports.default = QuarterDetail;
//# sourceMappingURL=quarters_details.model.js.map