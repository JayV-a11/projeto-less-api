import AbstractStrategy from '../AbstractStrategy.js';
import Result from '../../util/Result.js';

export default class FindByCostumerStrategy extends AbstractStrategy {
    constructor({
        result = new Result(),
        cartService = null
    } = {}) {
        super();
        this.result = result;
        this.cartService = cartService;
    }

    async execute(filter, result = this.result) {
        try {
            const cards = await this.cartService.findByUser(filter);
            result.data = cards;
            result.status = (cards.length === 0) ? 204 : 200;
        } catch(error) {
            result.status = 500;
            result.error.push(error.message);
        }

        return {
            entity: filter,
            result
        }
    }
}