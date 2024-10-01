import AbstractModel from './AbstractModel.js';
export default class CartItemModel extends AbstractModel {
  constructor({
    id = null,
    cart_id = null,
    book_id = null,
    quantity = 0,
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