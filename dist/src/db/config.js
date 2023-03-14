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
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
class Database {
    constructor() {
        const dbPassword = process.env.DB_PASSWORD || '';
        const dbName = process.env.DB_NAME || '';
        const dbHost = process.env.DB_HOST || '';
        const dbPort = parseInt(process.env.DB_PORT || '');
        const dbNameMigration = process.env.DB_NAME_EVALUA || '';
        this.sequelize = new sequelize_1.Sequelize(dbName, 'root', dbPassword, {
            host: dbHost,
            port: dbPort,
            dialect: 'mysql'
        });
        this.sequelizeMigration = new sequelize_1.Sequelize(dbNameMigration, 'root', dbPassword, {
            host: dbHost,
            port: dbPort,
            dialect: 'mysql'
        });
    }
    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }
    testConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.sequelize.authenticate();
                console.log(`Connection to main database ${process.env.DB_NAME || ''} has been established successfully.`);
            }
            catch (error) {
                console.error('Unable to connect to the main database:', error);
            }
            try {
                yield this.sequelizeMigration.authenticate();
                console.log(`Connection to migration database ${process.env.DB_NAME_EVALUA || ''} has been established successfully.`);
            }
            catch (error) {
                console.error('Unable to connect to the migration database:', error);
            }
        });
    }
    closeConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.sequelize.close();
            yield this.sequelizeMigration.close();
        });
    }
    getSequelize() {
        return this.sequelize;
    }
    getSequelizeMigration() {
        return this.sequelizeMigration;
    }
}
exports.default = Database.getInstance();
//# sourceMappingURL=config.js.map