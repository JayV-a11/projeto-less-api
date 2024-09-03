import express from 'express';
import CardController from '../controller/CardController.js';

const router = express.Router();

const middleware = (req, res, next) => {
    next();
}

router.use(middleware);

router.post('/card', new CardController().create);
router.patch('/card', new CardController().update);
router.delete('/card', new CardController().delete);
router.get('/card', new CardController().findByCostumer);

export default router;
