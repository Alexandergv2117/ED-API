import express, { Express, NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import RouterAPI from './src/router/index';
import { corsOptions } from './src/middlewares/cors.middleware';
import Database from './src/db/config';

export default class App {
  public app: Express;
  public port: number;
  public routerAPI: RouterAPI;

  constructor() {
    dotenv.config();
    this.app = express();
    this.port = process.env.PORT ? parseInt(process.env.PORT) : 5000;
    this.routerAPI = new RouterAPI();

    this.initializeMiddlewares();
    this.initializeRoutes(this.routerAPI);
  }

  private initializeMiddlewares() {
    this.app.use(cors(corsOptions));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    Database.testConnection();
  }

  private initializeRoutes(routes: RouterAPI) {
    this.app.use('/api/v1', routes.router);
    this.app.get('/', (req: Request, res: Response) => {
      res.send('ED-API!!!');
    });
    this.app.use((req: Request, res: Response, next: NextFunction) => {
      res.status(404).send({ message: 'Page not found' });
      next();
    });
  }
}
