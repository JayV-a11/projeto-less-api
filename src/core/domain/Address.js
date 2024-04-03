import AbstractEntity from "./AbstractEntity.js";

export default class Address extends AbstractEntity {
  constructor({ id = null, customer_id = null, cep = "", rua = '', numero = '', bairro = '', cidade = '', estado = '', complemento = '' } = {}) {
    super();
    this.id = id;
    this.customer_id = customer_id;
    this.cep = cep;
    this.rua = rua;
    this.numero = numero;
    this.bairro = bairro;
    this.cidade = cidade;
    this.estado = estado;
    this.complemento = complemento;
  }
}
