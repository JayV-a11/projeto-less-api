import AbstractUseCase from '../AbstractUseCase.js';
import Result from '../../util/Result.js';

//Strategies
import ValidateCardFieldsStrategy from '../../strategy/Card/ValidateCardFieldsStrategy.js';
import ValidateCostumerExistenceStrategy from '../../strategy/Card/ValidateCostumerExistenceStrategy.js';
import UpdateCardStrategy from '../../strategy/Card/UpdateCardStrategy.js';
import FindAllCardsStrategy from '../../strategy/Card/FindAllCardsStrategy.js';
import CostumerService from '../../../outbound/service/CostumerService.js';

export default class UpdateCardUseCase extends AbstractUseCase {
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
            new UpdateCardStrategy({
                cardService: this.cardService
            }),
            new FindAllCardsStrategy({
                cardService: this.cardService
            }),
        ]
    }

    async updateCard(card) {
        return await this.executeStrategies(card, new Result());
    }
}