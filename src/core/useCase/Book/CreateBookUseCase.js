import AbstractUseCase from '../AbstractUseCase.js';
import Result from '../../util/Result.js';

//Strategies
import ValidateBookFieldsStrategy from '../../strategy/Book/ValidateBookFieldsStrategy.js';
import SaveBookStrategy from '../../strategy/Book/SaveBookStrategy.js';

export default class CreateBookUseCase extends AbstractUseCase {
    constructor({
        bookService = null
    } = {}) {
        super();
        this.bookService = bookService;
        this.strategies = [
            new ValidateBookFieldsStrategy(),
            new SaveBookStrategy({
                bookService: this.bookService
            }),
        ]
    }

    async createBook(book) {
        return await this.executeStrategies(book, new Result());
    }
}