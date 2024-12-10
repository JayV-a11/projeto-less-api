import AbstractUseCase from '../AbstractUseCase.js';
import Result from '../../util/Result.js';

//Strategies
import SaveOrderStrategy from '../../strategy/Order/SaveOrderStrategy.js';
import ClearCartStrategy from '../../strategy/Order/ClearCartStrategy.js';

export default class CreateCartUseCase extends AbstractUseCase {
    constructor({
        orderService = null,
        cartService = null,
    } = {}) {
        super();
        this.orderService = orderService;
        this.cartService = cartService;
        this.strategies = [
            new SaveOrderStrategy({
                orderService: this.orderService
            }),
            new ClearCartStrategy({
                cartService: this.cartService
            }),
        ]
    }

    async createOrder(cart) {
        return await this.executeStrategies(cart, new Result());
    }
}