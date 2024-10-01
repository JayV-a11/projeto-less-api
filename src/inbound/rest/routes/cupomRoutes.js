import express from 'express';
import CupomController from '../controller/CupomController.js';

const router = express.Router();

const middleware = (req, res, next) => {
    next();
}

router.use(middleware);

router.post('/cupom', new CupomController().create);
router.patch('/cupom', new CupomController().update);
router.get('/cupom', new CupomController().getByCostumer);

export default router;
