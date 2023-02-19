import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

class Database {
    private static instance: Database;
    private sequelize: Sequelize;

    private constructor() {
        const dbPassword = process.env.DB_PASSWORD || '';
        const dbName = process.env.DB_NAME || '';
        const dbHost = process.env.DB_HOST || '';
        const dbPort = process.env.DB_PORT || '';

        this.sequelize = new Sequelize(dbName, 'root', dbPassword, {
            host: dbHost,
            port: parseInt(dbPort),
            dialect: 'mysql',
        });
    }

    public static getInstance(): Database {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }

    public async testConnection(): Promise<void> {
        try {
            await this.sequelize.authenticate();
            console.log('Connection has been established successfully.');
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    }

    public async closeConnection(): Promise<void> {
        await this.sequelize.close();
    }

    public getSequelize(): Sequelize {
        return this.sequelize;
    }
}

export default Database.getInstance();
