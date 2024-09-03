import AbstractStrategy from '../AbstractStrategy.js';
import Costumer from '../../domain/Costumer.js';
import Result from '../../util/Result.js';

export default class ValidateCostumerFieldsStrategy extends AbstractStrategy {
    constructor({
        result = new Result()
    } = {}) {
        super();
        this.result = result;
    }

    async execute(costumer, result = this.result) {
        // Verifica se a entidade recebida é uma instância de Costumer
        if (!typeof costumer === new Costumer()) {
            result.error.push('Entidade recebida não é um cliente!');
        }

        // Valida o campo "name"
        if (!costumer.name || costumer.name.length === 0) {
            result.error.push('O campo "nome" é obrigatório!');
        }

        // Valida o campo "last_name"
        if (!costumer.last_name || costumer.last_name.length === 0) {
            result.error.push('O campo "sobrenome" é obrigatório!');
        }

        // Valida o campo "email"
        if (!costumer.email || costumer.email.length === 0) {
            result.error.push('O campo "email" é obrigatório!');
        } else if (!this.isValidEmail(costumer.email)) {
            result.error.push('O campo "email" deve ser um endereço de e-mail válido!');
        }

        // Valida o campo "birthdate"
        if (!costumer.birthdate || costumer.birthdate.length === 0) {
            result.error.push('O campo "data de nascimento" é obrigatório!');
        }

        // Valida o campo "cpf"
        if (!costumer.cpf || costumer.cpf.length === 0) {
            result.error.push('O campo "CPF" é obrigatório!');
        }

        // Valida o campo "phone"
        if (!costumer.phone || costumer.phone.length === 0) {
            result.error.push('O campo "telefone" é obrigatório!');
        }

        if (!costumer.password || costumer.password.length === 0) {
            result.error.push('O campo "senha" é obrigatório!');
        } else if (!this.isStrongPassword(costumer.password)) {
            result.error.push('O campo "senha" deve conter pelo menos 8 caracteres, incluir letras maiúsculas e minúsculas, e ter caracteres especiais!');
        }

        // Valida o campo "ranking"
        if (costumer.ranking === undefined || costumer.ranking === null) {
            result.error.push('O campo "ranking" é obrigatório!');
        } else if (typeof costumer.ranking !== 'number') {
            result.error.push('O campo "ranking" deve ser um número!');
        }

        // Valida o campo "inactive"
        if (costumer.inactive === undefined) {
            result.error.push('O campo "inativo" é obrigatório!');
        }

        if (result.error.length > 0) {
            result.status = 406; 
        }

        return {
            entity: costumer,
            result
        };
    }

    // validar o formato do e-mail
    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    isStrongPassword(password) {
        const minLength = 8;
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
        return password.length >= minLength && hasUpperCase && hasLowerCase && hasSpecialChar;
    }
}
