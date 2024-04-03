import express from 'express';
import CostumerController from '../controller/CostumerController.js';

const router = express.Router();

const middleware = (req, res, next) => {
    next();
}

router.use(middleware);

router.get('/costumer', new CostumerController().findAll);
router.post('/costumer', new CostumerController().create);
router.patch('/costumer', new CostumerController().update);

export default router;
