import AbstractStrategy from '../AbstractStrategy.js';
import Result from '../../util/Result.js';

export default class ClearCartStrategy extends AbstractStrategy {
    constructor ({
        cartService = null,
        result = new Result()
    } = {}) {
        super();
        this.result = result;
        this.cartService = cartService;
    }

    async execute(cart, result = this.result) {
        try {
            await this.cartService.clearCart(cart);
            result.status = 201;
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