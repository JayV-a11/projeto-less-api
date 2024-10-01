import AbstractUseCase from '../AbstractUseCase.js';
import Result from '../../util/Result.js';

//Strategies
import SaveOrderCartStrategy from '../../strategy/Order/SaveOrderCartStrategy.js';

export default class CreateOrderCartUseCase extends AbstractUseCase {
    constructor({
        orderService = null
    } = {}) {
        super();
        this.orderService = orderService;
        this.strategies = [
            new SaveOrderCartStrategy({
                orderService: this.orderService
            }),
        ]
    }

    async createOrderCart(cart) {
        return await this.executeStrategies(cart, new Result());
    }
}