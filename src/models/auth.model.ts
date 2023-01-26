import Connect from "../db/config";
import sql from "mssql";

export default class AuthModel {
    private pool: Connect = new Connect();

    public async login(user: string, password: string) {
        try {
            const pool = await this.pool.getConnection();
            const result = await pool?.request()
                .input("user", sql.VarChar, user)
                .input("password", sql.VarChar, password)
                .query("SELECT * FROM dbo.Users WHERE user = @user AND password = @password");
            if (result)
                return result.recordset;
            else return null;
        } catch (error) {
            console.log(error);
        }
    }
}