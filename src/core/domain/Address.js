import AbstractEntity from "./AbstractEntity.js";

export default class Address extends AbstractEntity {
  constructor({
    id = null,
    customer_id = null,
    tipo_residencia = '',
    tipo_logradouro = '',
    logradouro = '',
    numero = '',
    bairro = '',
    cep = '',
    cidade = '',
    estado = '',
    pais = '',
    observacoes = '',
    tipo_endereco = '',
  } = {}) {
    super();
    this.id = id;
    this.customer_id = customer_id;
    this.tipo_residencia = tipo_residencia;
    this.tipo_logradouro = tipo_logradouro;
    this.logradouro = logradouro;
    this.numero = numero;
    this.bairro = bairro;
    this.cep = cep;
    this.cidade = cidade;
    this.estado = estado;
    this.pais = pais;
    this.observacoes = observacoes;
    this.tipo_endereco = tipo_endereco;
  }
}
