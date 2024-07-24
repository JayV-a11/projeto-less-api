import AbstractStrategy from '../AbstractStrategy.js';
import Cart from '../../domain/Cart.js';
import Result from '../../util/Result.js';

export default class ValidateCartFieldsStrategy extends AbstractStrategy {
    constructor ({
        result = new Result()
    } = {}) {
        super();
        this.result = result;
    }

    async execute(cart, result = this.result) {
        if (!typeof cart === new Cart()) {
            result.error.push('Entidade recebida não é um cartão!');
        }

        if (!cart || !cart.customer_id || cart.customer_id.length === 0) {
            result.error.push('Cliente não encontrado');
        }


        if (result.error.length > 0) {
            result.status = 406;
        }

        return {
            entity: cart,
            result
        };
    }
}