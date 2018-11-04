import { Router } from 'express';
import * as QuizController from '../controllers/quiz.controller';
const router = new Router();

router.route('/quiz').get(QuizController.getQuiz);
router.route('/quiz/:id/summary').get(QuizController.getSummary);

export default router;
