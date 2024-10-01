import express from 'express';
import CartController from '../controller/CartController.js';

const router = express.Router();

const middleware = (req, res, next) => {
    next();
}

router.use(middleware);

router.post('/cart', new CartController().create);
router.post('/cartItem', new CartController().addCartItem);
router.patch('/cartItem', new CartController().updateCartItem);
router.delete('/cartItem', new CartController().deleteCartItem);
router.get('/cartItem', new CartController().findItemsByCart);
router.get('/cart', new CartController().findByCostumer);

export default router;
