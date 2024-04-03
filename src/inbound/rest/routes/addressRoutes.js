import express from 'express';
import AddressController from '../controller/AddressController.js';

const router = express.Router();

const middleware = (req, res, next) => {
    next();
}

router.use(middleware);

router.post('/address', new AddressController().create);
router.get('/address', new AddressController().findByCostumer);

export default router;
