import AbstractUseCase from '../AbstractUseCase.js';
import Result from '../../util/Result.js';

//Strategies
import ChatWithAIUseStrategy from '../../strategy/FaqAi/ChatWithAIUseStrategy.js';
import ListAIBooksStrategy from '../../strategy/Book/ListAIBooksStrategy.js';

export default class FaqChatUseCase extends AbstractUseCase {
    constructor({
        bookService = null
    } = {}) {
        super();
        this.strategies = [
            new ListAIBooksStrategy({
                bookService: bookService
            }),
            new ChatWithAIUseStrategy(),
        ]
    }

    async chat(cart) {
        return await this.executeStrategies(cart, new Result());
    }
}