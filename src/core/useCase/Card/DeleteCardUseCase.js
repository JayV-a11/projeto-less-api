import AbstractUseCase from '../AbstractUseCase.js';
import Result from '../../util/Result.js';

//Strategies
import DeleteCardStrategy from '../../strategy/Card/DeleteCardStrategy.js';
import FindAllCardsStrategy from '../../strategy/Card/FindAllCardsStrategy.js';

export default class DeleteCardUseCase extends AbstractUseCase {
    constructor({
        cardService = null
    } = {}) {
        super();
        this.cardService = cardService;
        this.strategies = [
            new DeleteCardStrategy({
                cardService: this.cardService
            }),
            new FindAllCardsStrategy({
                cardService: this.cardService
            }),
        ]
    }

    async deleteCard(card) {
        return await this.executeStrategies(card, new Result());
    }
}