import { Request, Response } from "express";
import AuthModel from "models/auth.model";

export default class AuthController {
    private authModel: AuthModel = new AuthModel();

    public async login(req: Request, res: Response) {
        try {
            const { user, password } = req.body;
            const result = await this.authModel.login(user, password);
            return result;
        } catch (error) {
            console.log(error);
            res.status(200).send({ message: "LOGIN ROUTE" })
        }
    }
}