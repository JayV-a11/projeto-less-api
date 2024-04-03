import AbstractUseCase from '../AbstractUseCase.js';
import Result from '../../util/Result.js';

//Strategies
import ValidateCardFieldsStrategy from '../../strategy/Card/ValidateCardFieldsStrategy.js';
import ValidateCostumerExistenceStrategy from '../../strategy/Card/ValidateCostumerExistenceStrategy.js';
import SaveCardStrategy from '../../strategy/Card/SaveCardStrategy.js';
import CostumerService from '../../../outbound/service/CostumerService.js';

export default class CreateCardUseCase extends AbstractUseCase {
    constructor({
        cardService = null
    } = {}) {
        super();
        const costumerService =  new CostumerService()
        this.cardService = cardService;
        this.strategies = [
            new ValidateCardFieldsStrategy(),
            new ValidateCostumerExistenceStrategy({
                costumerService: costumerService
            }),
            new SaveCardStrategy({
                cardService: this.cardService
            }),
        ]
    }

    async createCard(card) {
        return await this.executeStrategies(card, new Result());
    }
}