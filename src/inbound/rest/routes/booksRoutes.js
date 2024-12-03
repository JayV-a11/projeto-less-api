import express from 'express';
import BookController from '../controller/BookController.js';

const router = express.Router();

const middleware = (req, res, next) => {
    next();
}

router.use(middleware);

router.get('/books', new BookController().findAll);
router.get('/book', new BookController().findById);
router.post('/book', new BookController().create);
router.patch('/book', new BookController().update);

export default router;
