import { Router } from 'express';
import QuestionControllers from '../controllers/questions.controllers';

export default class QuestionRoutes {
  public router: Router;
  private QuestionController: QuestionControllers;

  constructor() {
    this.router = Router();
    this.QuestionController = new QuestionControllers();
    this.initializeQuestionRoutes(
      this.router,
      this.QuestionController
    );
  }

  private initializeQuestionRoutes(
    router: Router,
    Controller: QuestionControllers
  ) {
    router.get('/', (req, res) => {
      res.send('Hello World!');
    });
    // master rute
    // ruta de las preguntas
    router.get('/student/:idQuestion', Controller.getQuestionByStudent);
  }  
}
