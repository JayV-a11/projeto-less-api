import AbstractStrategy from '../AbstractStrategy.js';
import Result from '../../util/Result.js';

export default class UpdateBookkStrategy extends AbstractStrategy {
    constructor ({
        bookService = null,
        result = new Result()
    } = {}) {
        super();
        this.result = result;
        this.bookService = bookService;
    }

    async execute(book, result = this.result) {
        try {
            book = await this.bookService.updateBook(book);
            result.status = 200;
            result.data = [book];
        } catch (error) {
            result.status = 500;
            result.error.push(error.message);
        }

        return {
            entity: book,
            result
        };
    }
}