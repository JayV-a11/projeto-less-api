import ICartService from "../../core/service/ICartService.js";
import CartMapper from "../database/orm/sequelize/model/mapper/CartMapper.js";
import CartRepository from "../database/orm/sequelize/repository/CartRepository.js";
import CartFilterMapper from "../database/orm/sequelize/filter/mapper/CartFilterMapper.js";

export default class CartService extends ICartService {
  constructor({ cartRepository = null } = {}) {
    super();
    this.createCart = this.createCart.bind(this);
    this.addItem = this.addItem.bind(this);
    this.updateItem = this.updateItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.getCartAllItemsById = this.getCartAllItemsById.bind(this);
    this.findAllById = this.findAllById.bind(this);
    this.findByUser = this.findByUser.bind(this);
    this.cartRepository = new CartRepository();
    this.cartMapper = new CartMapper();
    this.cartFilterMapper = new CartFilterMapper();
  }

  async createCart(cart) {
    const cartModel = await this.cartRepository.save(cart);
    return this.cartMapper.adapt(cartModel);
  }

  async addItem(cart) {
     await this.cartRepository.add(cart);
  }

  async updateItem(cart) {
     await this.cartRepository.updateItem(cart);
  }

  async deleteItem(cart) {
     await this.cartRepository.deleteItem(cart);
  }

  async getCartAllItemsById(cart) {
    const carts = await this.cartRepository.findItems({
      where: {
        cart_id: cart.cart_id,
      },
    });

    return carts;
  }

  async findAllById(filter) {
    const cartFilter = this.cartFilterMapper.adapt(filter);
    filter = cartFilter.mountFilter();

    const cartModels = await this.cartRepository.findAll(filter);

    const carts = [];

    for (const cartModel of cartModels) {
      carts.push(this.cartMapper.adapt(cartModel));
    }

    return carts;
  }

  async findByUser(filter) {
    const cartModels = await this.cartRepository.findAll({
      where: {
        customer_id: filter.customer_id,
      }
    });

    const carts = [];

    for (const cartModel of cartModels) {
      carts.push(this.cartMapper.adapt(cartModel));
    }

    return carts;
  }
}
