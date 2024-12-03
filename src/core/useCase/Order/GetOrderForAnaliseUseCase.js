import AbstractUseCase from '../AbstractUseCase.js';
import Result from '../../util/Result.js';

//Strategies
import GetOrderForAnaliseStrategy from '../../strategy/Order/GetOrderForAnaliseStrategy.js';

export default class GetOrderForAnaliseUseCase extends AbstractUseCase {
    constructor({
        orderService = null
    } = {}) {
        super();
        this.orderService = orderService;
        this.strategies = [
            new GetOrderForAnaliseStrategy({
                orderService: this.orderService
            }),
        ]
    }

    async get(cart) {
        return await this.executeStrategies(cart, new Result());
    }
}