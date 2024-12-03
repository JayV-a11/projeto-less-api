import express from 'express';
import FaqAiController from '../controller/FaqAiController.js';

const router = express.Router();

const middleware = (req, res, next) => {
    next();
}

router.use(middleware);

router.post('/faqAi', new FaqAiController().chat);

export default router;