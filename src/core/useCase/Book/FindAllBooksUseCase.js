import AbstractUseCase from '../AbstractUseCase.js';
import Result from '../../util/Result.js';

//Strategies
import FindAllBooksStrategy from '../../strategy/Book/FindAllBooksStrategy.js';

export default class FindAllBooks extends AbstractUseCase {
    constructor({
        bookService = null
    } = {}) {
        super();
        this.bookService = bookService;
        this.strategies = [
            new FindAllBooksStrategy({
                bookService: this.bookService
            }),
        ]
    }

    async findAllBooks(filter) {
        return await this.executeStrategies(filter, new Result());
    }
}