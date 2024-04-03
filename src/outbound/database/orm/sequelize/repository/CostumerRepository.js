import ICostomerRepository from "../../../../../core/repository/ICostomerRepository.js";
import CostumerModel from "../model/CostumerModel.js";
export default class CostumerRepository extends ICostomerRepository {
  constructor() {
    super(CostumerModel.init());
  }

  async save(costumer) {
    return await this.connection.create({
      name: costumer.name,
      email: costumer.email,
      inactive: costumer.inactive,
    });
  }

  async update(costumer) {
    const data =  {
      name: costumer.name,
      email: costumer.email,
      inactive: costumer.inactive,
    }

    return await this.connection.update(data,
      {
        where: {
          id: costumer.id,
        },
      }
    );
  }

  async findAll(filter) {
    return await this.connection.findAll(filter);
  }

  async findOne(filter) {
    return await this.connection.findOne(filter);
  }
}
