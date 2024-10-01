import AbstractStrategy from '../AbstractStrategy.js';
import Result from '../../util/Result.js';

export default class SaveCupomStrategy extends AbstractStrategy {
    constructor ({
        cupomService = null,
        result = new Result()
    } = {}) {
        super();
        this.result = result;
        this.cupomService = cupomService;
    }

    async execute(cart, result = this.result) {
        try {
            cart = await this.cupomService.createCupom(cart);
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