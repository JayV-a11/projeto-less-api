import AbstractStrategy from '../AbstractStrategy.js';
import Costumer from '../../domain/Costumer.js';
import Result from '../../util/Result.js';

export default class ValidateCostumerFieldsStrategy extends AbstractStrategy {
    constructor ({
        result = new Result()
    } = {}) {
        super();
        this.result = result;
    }

    async execute(costumer, result = this.result) {
        if (!typeof costumer === new Costumer()) {
            result.error.push('Entidade recebida não é um usuário!');
        }

        if (!costumer || !costumer.name || costumer.name.length === 0) {
            result.error.push('O campo "nome" é obrigatório!');
        }

        if (!costumer || !costumer.email || costumer.email.length === 0) {
            result.error.push('O campo "email" é obrigatório!');
        }

        if (result.error.length > 0) {
            result.status = 406;
        }

        return {
            entity: costumer,
            result
        };
    }
}