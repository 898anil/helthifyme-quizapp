import { Router } from 'express';
import * as AnswerController from '../controllers/answer.controller';
const router = new Router();

// Get all Posts
router.route('/answer').post(AnswerController.createAnswer);


export default router;
