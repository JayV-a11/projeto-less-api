import AbstractEntity from "./AbstractEntity.js";

export default class Card extends AbstractEntity {
  constructor({ id = null, customer_id = null, number = "", titular = '', expiration = '', main = false } = {}) {
    super();
    this.id = id;
    this.customer_id = customer_id;
    this.number = number;
    this.titular = titular;
    this.expiration = expiration;
    this.main = main;
  }
}
