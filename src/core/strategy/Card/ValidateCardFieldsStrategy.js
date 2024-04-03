import AbstractStrategy from '../AbstractStrategy.js';
import Card from '../../domain/Card.js';
import Result from '../../util/Result.js';

export default class ValidateCardFieldsStrategy extends AbstractStrategy {
    constructor ({
        result = new Result()
    } = {}) {
        super();
        this.result = result;
    }

    async execute(card, result = this.result) {
        if (!typeof card === new Card()) {
            result.error.push('Entidade recebida não é um cartão!');
        }

        if (!card || !card.customer_id || card.customer_id.length === 0) {
            result.error.push('Cliente não encontrado');
        }

        if (!card || !card.number || card.number.length === 0) {
            result.error.push('O campo "numero" é obrigatório!');
        }

        if (!card || !card.titular || card.titular.length === 0) {
            result.error.push('O campo "titular" é obrigatório!');
        }

        if (!card || !card.expiration || card.expiration.length === 0) {
            result.error.push('O campo "data" é obrigatório!');
        }

        if (result.error.length > 0) {
            result.status = 406;
        }

        return {
            entity: card,
            result
        };
    }
}