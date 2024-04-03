import AbstractStrategy from '../AbstractStrategy.js';
import Result from '../../util/Result.js';

export default class SaveCardStrategy extends AbstractStrategy {
    constructor ({
        cardService = null,
        result = new Result()
    } = {}) {
        super();
        this.result = result;
        this.cardService = cardService;
    }

    async execute(card, result = this.result) {
        try {
            card = await this.cardService.createCard(card);
            result.status = 201;
            result.data = [card];
        } catch (error) {
            result.status = 500;
            result.error.push(error.message);
        }

        return {
            entity: card,
            result
        };
    }
}