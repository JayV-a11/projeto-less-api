import express from 'express';
import CartController from '../controller/CartController.js';

const router = express.Router();

const middleware = (req, res, next) => {
    next();
}

router.use(middleware);

// router.post('/cart', new CartController().create);
// router.get('/cart', new CartController().findByCostumer);

export default router;
