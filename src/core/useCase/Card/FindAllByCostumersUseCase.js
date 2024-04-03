import AbstractUseCase from '../AbstractUseCase.js';
import Result from '../../util/Result.js';

//Strategies
import FindAllCardsStrategy from '../../strategy/Card/FindAllCardsStrategy.js';

export default class FindAllByCostumersUseCase extends AbstractUseCase {
    constructor({
        cardService = null
    } = {}) {
        super();
        this.cardService = cardService;
        this.strategies = [
            new FindAllCardsStrategy({
                cardService: this.cardService
            }),
        ]
    }

    async findAllCard(filter) {
        return await this.executeStrategies(filter, new Result());
    }
}