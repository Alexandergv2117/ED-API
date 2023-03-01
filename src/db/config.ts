import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

class Database {
    private static instance: Database;
    public sequelize: Sequelize;
    public sequelizeMigration: Sequelize;

    private constructor() {
        const dbPassword = process.env.DB_PASSWORD || '';
        const dbName = process.env.DB_NAME || '';
        const dbHost = process.env.DB_HOST || '';
        const dbPort = parseInt(process.env.DB_PORT || '');

        const dbNameMigration = process.env.DB_NAME_EVALUA || '';

        this.sequelize = new Sequelize(dbName, 'root', dbPassword, {
            host: dbHost,
            port: dbPort,
            dialect: 'mysql',
        });

        this.sequelizeMigration = new Sequelize(
            dbNameMigration,
            'root',
            dbPassword,
            {
                host: dbHost,
                port: dbPort,
                dialect: 'mysql',
            },
        );
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
            console.log(
                'Connection to main database has been established successfully.',
            );
        } catch (error) {
            console.error('Unable to connect to the main database:', error);
        }

        try {
            await this.sequelizeMigration.authenticate();
            console.log(
                'Connection to migration database has been established successfully.',
            );
        } catch (error) {
            console.error(
                'Unable to connect to the migration database:',
                error,
            );
        }
    }

    public async closeConnection(): Promise<void> {
        await this.sequelize.close();
        await this.sequelizeMigration.close();
    }

    public getSequelize(): Sequelize {
        return this.sequelize;
    }

    public getSequelizeMigration(): Sequelize {
        return this.sequelizeMigration;
    }
}

export default Database.getInstance();
