import AbstractModel from './AbstractModel.js';
export default class CostumerModel extends AbstractModel {
  constructor({
    id = null,
    name = "",
    last_name = "",
    email = "",
    birthdate = "",
    cpf = "",
    phone = "",
    password = "",
    ranking = null,
    inactive = false,
  } = {}) {
    super();
    this.id = id;
    this.name = name;
    this.last_name = last_name;
    this.email = email;
    this.birthdate = birthdate;
    this.cpf = cpf;
    this.phone = phone;
    this.password = password;
    this.ranking = ranking;
    this.inactive = inactive;
  }
}