import ICostumerService from "../../core/service/ICostumerService.js";
import CostumerFilterMapper from "../database/orm/sequelize/filter/mapper/CostumerFilterMapper.js";
import CostumerMapper from "../database/orm/sequelize/model/mapper/CostumerMapper.js";
import CostumerRepository from "../database/orm/sequelize/repository/CostumerRepository.js";

export default class CostumerService extends ICostumerService {
  constructor({ costumerRepository = null } = {}) {
    super();
    this.createCostumer = this.createCostumer.bind(this);
    this.updateCostumer = this.updateCostumer.bind(this);
    this.findAllCostumers = this.findAllCostumers.bind(this);
    this.findOne = this.findOne.bind(this);
    this.costumerRepository = new CostumerRepository();
    this.costumerFilterMapper = new CostumerFilterMapper();
    this.costumerMapper = new CostumerMapper();
  }

  async createCostumer(costumer) {
    const costumerModel = await this.costumerRepository.save(costumer);
    return this.costumerMapper.adapt(costumerModel);
  }

  async updateCostumer(costumer) {
    const costumerModel = await this.costumerRepository.update(costumer);
    return this.costumerMapper.adapt(costumerModel);
  }

  async findAllCostumers(filter) {
    const costumerFilter = this.costumerFilterMapper.adapt(filter);
    filter = costumerFilter.mountFilter();

    const costumerModels = await this.costumerRepository.findAll(filter);

    const costumers = [];

    for (const costumerModel of costumerModels) {
      costumers.push(this.costumerMapper.adapt(costumerModel));
    }

    return costumers;
  }

  async findOne(filter) {
    const costumerFilter = this.costumerFilterMapper.adapt(filter);
    filter = costumerFilter.mountFilter();

    const costumerModel = await this.costumerRepository.findOne(filter);

    const costumer = this.costumerMapper.adapt(costumerModel);

    return costumer;
  }
}
