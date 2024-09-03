import AbstractStrategy from "../AbstractStrategy.js";
import Costumer from "../../domain/Costumer.js";
import Result from "../../util/Result.js";

export default class ValidateCostumerUpdateFieldsStrategy extends AbstractStrategy {
  constructor({ result = new Result() } = {}) {
    super();
    this.result = result;
  }

  async execute(costumer, result = this.result) {
    if (!costumer || !costumer.id || costumer.id.length === 0) {
      result.error.push('O id é obrigatório!');
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
