import ICostumerRepository from "../../../../../core/repository/ICostumerRepository.js";
import CostumerModel from "../model/CostumerModel.js";
import bcrypt from "bcryptjs";

export default class CostumerRepository extends ICostumerRepository {
  constructor() {
    super(CostumerModel.init());
  }

  async save(costumer) {
    return await this.connection.create({
      name: costumer.name,
      last_name: costumer.last_name,
      email: costumer.email,
      birthdate: costumer.birthdate,
      cpf: costumer.cpf,
      phone: costumer.phone,
      password: await bcrypt.hash(costumer.password, 8),
      ranking: costumer.ranking,
      inactive: costumer.inactive,
    });
  }

  async update(costumer) {
    // Cria um objeto data vazio
    const data = {};

    // Adiciona somente os campos não nulos e não vazios ao data
    const fields = [
      'name', 'last_name', 'email', 'birthdate', 'cpf',
      'phone', 'ranking', 'inactive'
    ];
  
    for (const field of fields) {
      if (costumer[field] !== null && costumer[field] !== undefined && costumer[field] !== '') {
        data[field] = costumer[field];
      }
    }

    // Trata o campo password separadamente
    if (costumer.password !== null && costumer.password !== "") {
      data.password = await bcrypt.hash(costumer.password, 8);
    }

    return await this.connection.update(data, {
      where: {
        id: costumer.id,
      },
    });
  }

  async findAll(filter) {
    return await this.connection.findAll(filter);
  }

  async findOne(filter) {
    return await this.connection.findOne(filter);
  }
}
