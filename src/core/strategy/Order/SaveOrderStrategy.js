import AbstractStrategy from '../AbstractStrategy.js';
import Result from '../../util/Result.js';

export default class SaveOrderStrategy extends AbstractStrategy {
    constructor ({
        orderService = null,
        result = new Result()
    } = {}) {
        super();
        this.result = result;
        this.orderService = orderService;
    }

    async execute(cart, result = this.result) {
        try {
            cart = await this.orderService.createOrder(cart);
            result.status = 201;
            result.data = [cart];
        } catch (error) {
            result.status = 500;
            result.error.push(error.message);
        }

        return {
            entity: cart,
            result
        };
    }
}