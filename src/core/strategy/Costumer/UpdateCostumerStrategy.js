import AbstractStrategy from '../AbstractStrategy.js';
import Result from '../../util/Result.js';

export default class UpdateCostumerStrategy extends AbstractStrategy {
    constructor ({
        costumerService = null,
        result = new Result()
    } = {}) {
        super();
        this.result = result;
        this.costumerService = costumerService;
    }

    async execute(costumer, result = this.result) {
        try {
            costumer = await this.costumerService.updateCostumer(costumer);
            result.status = 200;
            result.data = [costumer];
        } catch (error) {
            result.status = 500;
            result.error.push(error.message);
        }

        return {
            entity: costumer,
            result
        };
    }
}