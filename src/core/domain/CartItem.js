import AbstractEntity from "./AbstractEntity.js";

export default class CartItem extends AbstractEntity {
  constructor({
    id = null,
    cart_id = null,
    book_id = null,
    quantity = 1,
    value = 0.0,
  } = {}) {
    super();
    this.id = id;
    this.cart_id = cart_id;
    this.book_id = book_id;
    this.quantity = quantity;
    this.value = value;
  }
}