import AbstractUseCase from '../AbstractUseCase.js';
import Result from '../../util/Result.js';

//Strategies
import FindAllCostumersStrategy from '../../strategy/Costumer/FindAllCostumersStrategy.js';

export default class FindAllCostumersUseCase extends AbstractUseCase {
    constructor({
        costumerService = null
    } = {}) {
        super();
        this.costumerService = costumerService;
        this.strategies = [
            new FindAllCostumersStrategy({
                costumerService: this.costumerService
            }),
        ]
    }

    async findAllCostumers(filter) {
        return await this.executeStrategies(filter, new Result());
    }
}