import AbstractStrategy from '../AbstractStrategy.js';
import Address from '../../domain/Address.js';
import Result from '../../util/Result.js';

export default class ValidateAddressUpdateFieldsStrategy extends AbstractStrategy {
    constructor({
        result = new Result()
    } = {}) {
        super();
        this.result = result;
    }

    async execute(address, result = this.result) {
        // Verifica se a entidade recebida é uma instância de Address
        if (!typeof address === new Address()) {
            result.error.push('Entidade recebida não é um endereço!');
        }

         // Valida o campo "customer_id"
         if (!address.id || address.id.length === 0) {
            result.error.push('O campo "id" é obrigatório!');
        }

        // Valida o campo "customer_id"
        if (!address.customer_id || address.customer_id.length === 0) {
            result.error.push('O campo "customer_id" é obrigatório!');
        }

        // Valida o campo "tipo_residencia"
        if (!address.tipo_residencia || address.tipo_residencia.length === 0) {
            result.error.push('O campo "tipo_residencia" é obrigatório!');
        }

        // Valida o campo "tipo_logradouro"
        if (!address.tipo_logradouro || address.tipo_logradouro.length === 0) {
            result.error.push('O campo "tipo_logradouro" é obrigatório!');
        }

        // Valida o campo "logradouro"
        if (!address.logradouro || address.logradouro.length === 0) {
            result.error.push('O campo "logradouro" é obrigatório!');
        }

        // Valida o campo "numero"
        if (!address.numero || address.numero.length === 0) {
            result.error.push('O campo "numero" é obrigatório!');
        }

        // Valida o campo "bairro"
        if (!address.bairro || address.bairro.length === 0) {
            result.error.push('O campo "bairro" é obrigatório!');
        }

        // Valida o campo "cep"
        if (!address.cep || address.cep.length === 0) {
            result.error.push('O campo "cep" é obrigatório!');
        }

        // Valida o campo "cidade"
        if (!address.cidade || address.cidade.length === 0) {
            result.error.push('O campo "cidade" é obrigatório!');
        }

        // Valida o campo "estado"
        if (!address.estado || address.estado.length === 0) {
            result.error.push('O campo "estado" é obrigatório!');
        }

        // Valida o campo "pais"
        if (!address.pais || address.pais.length === 0) {
            result.error.push('O campo "pais" é obrigatório!');
        }

        // Valida o campo "observacoes"
        if (address.observacoes === undefined) {
            result.error.push('O campo "observacoes" é obrigatório!');
        }

        // Valida o campo "tipo_endereco"
        if (!address.tipo_endereco || address.tipo_endereco.length === 0) {
            result.error.push('O campo "tipo_endereco" é obrigatório!');
        }

        if (result.error.length > 0) {
            result.status = 406; // Define status de erro apropriado
        }

        return {
            entity: address,
            result
        };
    }
}
