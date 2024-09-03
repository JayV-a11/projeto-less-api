import AbstractEntity from "./AbstractEntity.js";

export default class Card extends AbstractEntity {
  constructor({
    id = null,
    customer_id = null,
    numero_cartao = "",
    nome_cartao = '',
    validade = '',
    bandeira = '',
    codigo_seguranca = '',
    preferencial = false,
  } = {}) {
    super();
    this.id = id;
    this.customer_id = customer_id;
    this.numero_cartao = numero_cartao;
    this.nome_cartao = nome_cartao;
    this.validade = validade;
    this.bandeira = bandeira;
    this.codigo_seguranca = codigo_seguranca;
    this.preferencial = preferencial;
  }
}
