import AbstractUseCase from '../AbstractUseCase.js';
import Result from '../../util/Result.js';

//Strategies
import GetOrderStrategy from '../../strategy/Order/GetOrderStrategy.js';

export default class GetOrderUseCase extends AbstractUseCase {
    constructor({
        orderService = null
    } = {}) {
        super();
        this.orderService = orderService;
        this.strategies = [
            new GetOrderStrategy({
                orderService: this.orderService
            }),
        ]
    }

    async get(cart) {
        return await this.executeStrategies(cart, new Result());
    }
}