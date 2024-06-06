import AbstractStrategy from '../AbstractStrategy.js';
import Result from '../../util/Result.js';

export default class FindAllBooksStrategy extends AbstractStrategy {
    constructor({
        result = new Result(),
        bookService = null
    } = {}) {
        super();
        this.result = result;
        this.bookService = bookService;
    }

    async execute(filter, result = this.result) {
        try {
            const books = await this.bookService.findAllBooks(filter);
            result.data = books;
            result.status = (books.length === 0) ? 204 : 200;
        } catch(error) {
            result.status = 500;
            result.error.push(error.message);
        }

        return {
            entity: filter,
            result
        }
    }
}