import AbstractStrategy from '../AbstractStrategy.js';
import Card from '../../domain/Card.js';
import Result from '../../util/Result.js';

export default class ValidateCardFieldsStrategy extends AbstractStrategy {
    constructor({
        result = new Result()
    } = {}) {
        super();
        this.result = result;
    }

    async execute(card, result = this.result) {
        // Verifica se a entidade recebida é uma instância de Card
        if (!typeof card === new Card()) {
            result.error.push('Entidade recebida não é um cartão!');
        }

        // Valida o campo "customer_id"
        if (!card.customer_id || card.customer_id.length === 0) {
            result.error.push('O campo "customer_id" é obrigatório!');
        }

        // Valida o campo "numero_cartao"
        if (!card.numero_cartao || card.numero_cartao.length === 0) {
            result.error.push('O campo "numero_cartao" é obrigatório!');
        }

        // Valida o campo "nome_cartao"
        if (!card.nome_cartao || card.nome_cartao.length === 0) {
            result.error.push('O campo "nome_cartao" é obrigatório!');
        }

        // Valida o campo "validade"
        if (!card.validade || card.validade.length === 0) {
            result.error.push('O campo "validade" é obrigatório!');
        }

        // Valida o campo "bandeira"
        if (!card.bandeira || card.bandeira.length === 0) {
            result.error.push('O campo "bandeira" é obrigatório!');
        }

        // Valida o campo "codigo_seguranca"
        if (!card.codigo_seguranca || card.codigo_seguranca.length === 0) {
            result.error.push('O campo "codigo_seguranca" é obrigatório!');
        }

        // Valida o campo "preferencial"
        if (card.preferencial === undefined) {
            result.error.push('O campo "preferencial" é obrigatório!');
        }

        if (result.error.length > 0) {
            result.status = 406; // Define status de erro apropriado
        }

        return {
            entity: card,
            result
        };
    }
}
