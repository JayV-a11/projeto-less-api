import AbstractStrategy from '../AbstractStrategy.js';
import Result from '../../util/Result.js';

export default class ListAIBooksStrategy extends AbstractStrategy {
    constructor({
        result = new Result(),
        bookService = null
    } = {}) {
        super();
        this.result = result;
        this.bookService = bookService;
    }

    async execute(chat, result = this.result) {
        try {
            const books = await this.bookService.findAllBooks({});
            chat['books'] = books;
        } catch(error) {
            console.log(error)
            result.status = 500;
            result.error.push(error.message);
        }

        return {
            entity: chat,
            result
        }
    }
}