import AbstractUseCase from '../AbstractUseCase.js';
import Result from '../../util/Result.js';

//Strategies
import ValidateBookUpdateFieldsStrategy from '../../strategy/Book/ValidateBookUpdateFieldsStrategy.js';
import UpdateBookStrategy from '../../strategy/Book/UpdateBookStrategy.js';
import FindAllBookStrategy from '../../strategy/Book/FindAllBooksStrategy.js';

export default class UpdateBookUseCase extends AbstractUseCase {
    constructor({
        bookService = null
    } = {}) {
        super();
        this.bookService = bookService;
        this.strategies = [
            new ValidateBookUpdateFieldsStrategy(),
            new UpdateBookStrategy({
                bookService: this.bookService
            }),
            new FindAllBookStrategy({
                bookService: this.bookService
            }),
        ]
    }

    async updateBook(book) {
        return await this.executeStrategies(book, new Result());
    }
}