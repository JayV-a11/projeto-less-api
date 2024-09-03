import AbstractStrategy from "../AbstractStrategy.js";
import Result from "../../util/Result.js";

export default class ValidateCostumerExistenceStrategy extends AbstractStrategy {
  constructor({ result = new Result(), costumerService = null } = {}) {
    super();
    this.result = result;
    this.costumerService = costumerService;
  }

  async execute(costumer, result = this.result) {
    const res = await this.costumerService.findOne({fields: { id: costumer.id }});
    if (!res || !res.dataValues) {
      result.error.push("Cliente não encontrado");
      result.status = 401;
    }

    return {
      entity: costumer,
      result,
    };
  }
}
