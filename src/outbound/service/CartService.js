import ICartService from "../../core/service/ICartService.js";
import CartMapper from "../database/orm/sequelize/model/mapper/CartMapper.js";
import CartRepository from "../database/orm/sequelize/repository/CartRepository.js";
// import CartFilterMapper from "../database/orm/sequelize/filter/mapper/CartFilterMapper.js";

export default class CartService extends ICartService {
  constructor({ cartRepository = null } = {}) {
    super();
    this.createCart = this.createCart.bind(this);
    this.cartRepository = new CartRepository();
    this.cartMapper = new CartMapper();
    // this.cartFilterMapper = new CartFilterMapper();
  }

  async createCart(cart) {
    const cartModel = await this.cartRepository.save(cart);
    return this.cartMapper.adapt(cartModel);
  }

  // async findAllCarts(filter) {
  //   const cartFilter = this.cartFilterMapper.adapt(filter);
  //   filter = cartFilter.mountFilter();

  //   const cartModels = await this.cartRepository.findAll(filter);

  //   const carts = [];

  //   for (const cartModel of cartModels) {
  //     carts.push(this.cartMapper.adapt(cartModel));
  //   }

  //   return carts;
  // }
}
