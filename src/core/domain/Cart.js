import AbstractEntity from "./AbstractEntity.js";

export default class Card extends AbstractEntity {
  constructor({ id = null, customer_id = null } = {}) {
    super();
    this.id = id;
    this.customer_id = customer_id;
  }
}
