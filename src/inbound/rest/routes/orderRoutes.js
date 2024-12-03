import express from 'express';
import OrderController from '../controller/OrderController.js';

const router = express.Router();

const middleware = (req, res, next) => {
    next();
}

router.use(middleware);

router.post('/order', new OrderController().create);
router.patch('/order', new OrderController().update);
router.get('/order/all', new OrderController().getAll);
router.get('/order/all/analise', new OrderController().getAllAnalise);
router.get('/order', new OrderController().getByCostumer);
router.post('/orderCard', new OrderController().createOrderCard);

export default router;
