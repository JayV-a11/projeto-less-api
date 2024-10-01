import AbstractUseCase from '../AbstractUseCase.js';
import Result from '../../util/Result.js';

//Strategies
import SaveOrderStrategy from '../../strategy/Order/SaveOrderStrategy.js';

export default class CreateCartUseCase extends AbstractUseCase {
    constructor({
        orderService = null
    } = {}) {
        super();
        this.orderService = orderService;
        this.strategies = [
            new SaveOrderStrategy({
                orderService: this.orderService
            }),
        ]
    }

    async createOrder(cart) {
        return await this.executeStrategies(cart, new Result());
    }
}