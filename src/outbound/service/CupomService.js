import IDefaultService from "../../core/service/IDefaultService.js";
import CupomRepository from "../database/orm/sequelize/repository/CupomRepository.js";

export default class OrderService extends IDefaultService {
  constructor({ cupomRepository = null } = {}) {
    super();
    this.createCupom = this.createCupom.bind(this);
    this.updateCupom = this.updateCupom.bind(this);
    this.getCupomsByCostumer = this.getCupomsByCostumer.bind(this);
    this.cupomRepository = new CupomRepository();
  }

  async createCupom(order) {
    const res = await this.cupomRepository.save(order);
    return res;
  }

  async updateCupom(order) {
    const res = await this.cupomRepository.updateCupom(order);
    return res;
  }

  async getCupomsByCostumer(order) {
    const res = await this.cupomRepository.getCupomsByCostumer(order);
    return res;
  }
}
