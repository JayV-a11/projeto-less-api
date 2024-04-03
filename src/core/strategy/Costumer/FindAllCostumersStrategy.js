import AbstractStrategy from '../AbstractStrategy.js';
import Result from '../../util/Result.js';

export default class FindAllCostumerStrategy extends AbstractStrategy {
    constructor({
        result = new Result(),
        costumerService = null
    } = {}) {
        super();
        this.result = result;
        this.costumerService = costumerService;
    }

    async execute(filter, result = this.result) {
        try {
            const costumers = await this.costumerService.findAllCostumers(filter);
            result.data = costumers;
            result.status = (costumers.length === 0) ? 204 : 200;
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