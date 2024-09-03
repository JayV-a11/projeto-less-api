import AbstractUseCase from '../AbstractUseCase.js';
import Result from '../../util/Result.js';

//Strategies
import ValidateCostumerExistenceStrategy from '../../strategy/Costumer/ValidateCostumerExistenceStrategy.js';
import InactivateCostumerStrategy from '../../strategy/Costumer/InactivateCostumerStrategy.js';
import FindAllCostumersStrategy from '../../strategy/Costumer/FindAllCostumersStrategy.js';
import ValidateOnlyCostumerId from '../../strategy/Costumer/ValidateOnlyCostumerId.js';

export default class InactivateCostumerUseCase extends AbstractUseCase {
    constructor({
        costumerService = null
    } = {}) {
        super();
        this.costumerService = costumerService;
        this.strategies = [
            new ValidateOnlyCostumerId(),
            new ValidateCostumerExistenceStrategy({
                costumerService: this.costumerService
            }),
            new InactivateCostumerStrategy({
                costumerService: this.costumerService
            }),
            new FindAllCostumersStrategy({
                costumerService: this.costumerService
            }),
        ]
    }

    async inactivateCostumer(costumer) {
        return await this.executeStrategies(costumer, new Result());
    }
}