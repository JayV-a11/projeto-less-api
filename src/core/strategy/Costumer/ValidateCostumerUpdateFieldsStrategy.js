import AbstractStrategy from "../AbstractStrategy.js";
import Costumer from "../../domain/Costumer.js";
import Result from "../../util/Result.js";

export default class ValidateCostumerUpdateFieldsStrategy extends AbstractStrategy {
  constructor({ result = new Result() } = {}) {
    super();
    this.result = result;
  }

  async execute(costumer, result = this.result) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!typeof costumer === new Costumer()) {
      result.error.push("Entidade recebida não é um usuário!");
    }

    if (!costumer || !costumer.id || costumer.id.length === 0) {
      result.error.push('O id é obrigatório!');
    }

    if (!costumer || !costumer.name || costumer.name.length === 0) {
        result.error.push('O campo "usuário" é obrigatório!');
      }

    if (!costumer || !costumer.email || costumer.email.length === 0) {
        result.error.push('O campo "e-mail" é obrigatório!');
      }
  

    if (!emailPattern.test(costumer.email)) {
      result.error.push('O e-mail é inválido!');
    }

    if (result.error.length > 0) {
      result.status = 406;
    }

    return {
      entity: costumer,
      result,
    };
  }
}
