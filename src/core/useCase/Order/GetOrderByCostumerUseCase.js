import AbstractUseCase from '../AbstractUseCase.js';
import Result from '../../util/Result.js';

//Strategies
import GetOrderByCostumerStrategy from '../../strategy/Order/GetOrderByCostumerStrategy.js';

export default class GetOrderByCostumerUseCase extends AbstractUseCase {
    constructor({
        orderService = null
    } = {}) {
        super();
        this.orderService = orderService;
        this.strategies = [
            new GetOrderByCostumerStrategy({
                orderService: this.orderService
            }),
        ]
    }

    async get(cart) {
        return await this.executeStrategies(cart, new Result());
    }
}