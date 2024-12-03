import AbstractStrategy from '../AbstractStrategy.js';
import Result from '../../util/Result.js';

export default class GetOrderStrategy extends AbstractStrategy {
    constructor ({
        orderService = null,
        result = new Result()
    } = {}) {
        super();
        this.result = result;
        this.orderService = orderService;
    }

    async execute(filter, result = this.result) {
        try {
            const res = await this.orderService.getOrdersForAnalisy(filter);
            result.status = 201;
            result.data = res;
        } catch (error) {
            result.status = 500;
            result.error.push(error.message);
        }

        return {
            entity: filter,
            result
        };
    }
}