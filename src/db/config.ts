import sql from 'mssql';
import dotenv from 'dotenv';

export default class Connect {
    public async getConnection() {
        dotenv.config();
        const DB_CONNECTION = {
            user: process.env.DB_USER || '',
            password: process.env.DB_PASSWORD || '',
            server: process.env.DB_SERVER || '',
            database: process.env.DB_NAME || '',
            port: Number(process.env.DB_PORT) || 0,
            options: {
                encrypt: false,
                trustServerCertificate: false
            }

        }
        try {
            const pool = await sql.connect(DB_CONNECTION);
            return pool;
        }
        catch (e) {
            console.log(`\n\nError de conexion a la base de datos: \n\n${e}\n\n`);
        }
    }

}