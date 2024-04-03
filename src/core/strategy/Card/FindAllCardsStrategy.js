import AbstractStrategy from '../AbstractStrategy.js';
import Result from '../../util/Result.js';

export default class FindAllCardsStrategy extends AbstractStrategy {
    constructor({
        result = new Result(),
        cardService = null
    } = {}) {
        super();
        this.result = result;
        this.cardService = cardService;
    }

    async execute(filter, result = this.result) {
        try {
            const cards = await this.cardService.findAllCards(filter);
            result.data = cards;
            result.status = (cards.length === 0) ? 204 : 200;
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