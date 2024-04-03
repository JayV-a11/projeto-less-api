import AbstractUseCase from '../AbstractUseCase.js';
import Result from '../../util/Result.js';

//Strategies
import ValidateCostumerUpdateFieldsStrategy from '../../strategy/Costumer/ValidateCostumerUpdateFieldsStrategy.js';
import UpdateCostumerStrategy from '../../strategy/Costumer/UpdateCostumerStrategy.js';
import FindAllCostumersStrategy from '../../strategy/Costumer/FindAllCostumersStrategy.js';

export default class UpdateCostumerUseCase extends AbstractUseCase {
    constructor({
        costumerService = null
    } = {}) {
        super();
        this.costumerService = costumerService;
        this.strategies = [
            new ValidateCostumerUpdateFieldsStrategy(),
            new UpdateCostumerStrategy({
                costumerService: this.costumerService
            }),
            new FindAllCostumersStrategy({
                costumerService: this.costumerService
            }),
        ]
    }

    async updateCostumer(costumer) {
        return await this.executeStrategies(costumer, new Result());
    }
}