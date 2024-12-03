import AbstractUseCase from '../AbstractUseCase.js';
import Result from '../../util/Result.js';

//Strategies
import FindBookStrategy from '../../strategy/Book/FindBookStrategy.js';

export default class FindBookUseCase extends AbstractUseCase {
    constructor({
        bookService = null
    } = {}) {
        super();
        this.bookService = bookService;
        this.strategies = [
            new FindBookStrategy({
                bookService: this.bookService
            }),
        ]
    }

    async find(filter) {
        return await this.executeStrategies(filter, new Result());
    }
}