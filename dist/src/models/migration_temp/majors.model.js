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
class Major extends sequelize_1.Model {
    migration() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield Major.findAll();
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
Major.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    carrera: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    abrebiatura: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    nivel: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    departamento_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'carrera',
    sequelize: config_1.default.getSequelizeMigration(),
    timestamps: false
});
exports.default = Major;
//# sourceMappingURL=majors.model.js.map