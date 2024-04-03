import AbstractUseCase from '../AbstractUseCase.js';
import Result from '../../util/Result.js';

//Strategies
import ValidateCostumerFieldsStrategy from '../../strategy/Costumer/ValidateCostumerFieldsStrategy.js';
import SaveCostumerStrategy from '../../strategy/Costumer/SaveCostumerStrategy.js';

export default class CreateCostumerUseCase extends AbstractUseCase {
    constructor({
        costumerService = null
    } = {}) {
        super();
        this.costumerService = costumerService;
        this.strategies = [
            new ValidateCostumerFieldsStrategy(),
            new SaveCostumerStrategy({
                costumerService: this.costumerService
            }),
        ]
    }

    async createCostumer(costumer) {
        return await this.executeStrategies(costumer, new Result());
    }
}