import AbstractStrategy from '../AbstractStrategy.js';
import Address from '../../domain/Address.js';
import Result from '../../util/Result.js';

export default class ValidateAddressFieldsStrategy extends AbstractStrategy {
    constructor ({
        result = new Result()
    } = {}) {
        super();
        this.result = result;
    }

    async execute(address, result = this.result) {
        if (!typeof address === new Address()) {
            result.error.push('Entidade recebida não é um usuário!');
        }

        if (!address || !address.customer_id || address.customer_id.length === 0) {
            result.error.push('Cliente não encontrado');
        }

        if (!address || !address.cep || address.cep.length === 0) {
            result.error.push('O campo "cep" é obrigatório!');
        }

        if (!address || !address.rua || address.rua.length === 0) {
            result.error.push('O campo "rua" é obrigatório!');
        }

        if (!address || !address.numero || address.numero.length === 0) {
            result.error.push('O campo "numero" é obrigatório!');
        }

        if (!address || !address.bairro || address.bairro.length === 0) {
            result.error.push('O campo "bairro" é obrigatório!');
        }

        if (!address || !address.cidade || address.cidade.length === 0) {
            result.error.push('O campo "cidade" é obrigatório!');
        }

        if (!address || !address.estado || address.estado.length === 0) {
            result.error.push('O campo "cidade" é obrigatório!');
        }

        if (result.error.length > 0) {
            result.status = 406;
        }

        return {
            entity: address,
            result
        };
    }
}