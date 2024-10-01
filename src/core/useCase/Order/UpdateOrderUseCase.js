import AbstractUseCase from '../AbstractUseCase.js';
import Result from '../../util/Result.js';

//Strategies
import UpdateOrderStrategy from '../../strategy/Order/UpdateOrderStrategy.js';

export default class UpdateOrderUseCase extends AbstractUseCase {
    constructor({
        orderService = null
    } = {}) {
        super();
        this.orderService = orderService;
        this.strategies = [
            new UpdateOrderStrategy({
                orderService: this.orderService
            }),
        ]
    }

    async updateOrder(cart) {
        return await this.executeStrategies(cart, new Result());
    }
}