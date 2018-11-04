import { Router } from 'express';
import * as QuestionController from '../controllers/question.controller';
const router = new Router();

// Get all Posts
router.route('/question').post(QuestionController.createQuestion);
router.route('/question/:id').put(QuestionController.updateQuestion);
router.route('/question/:id').delete(QuestionController.deleteQuestion);


export default router;
