import AbstractEntity from "./AbstractEntity.js";

export default class Costumer extends AbstractEntity {
  constructor({ id = null, name = "", email = "", inactive = false } = {}) {
    super();
    this.id = id;
    this.name = name;
    this.email = email;
    this.inactive = inactive;
  }
}
