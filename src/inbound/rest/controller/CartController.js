import AbstractController from './AbstractController.js';
import CartModel from '../model/CartModel.js';
import CartService from '../../../outbound/service/CartService.js';
import CartMapper from '../model/mapper/CartMapper.js';
import CreateCartUseCase from '../../../core/useCase/Cart/CreateCartUseCase.js';
// import CartFilter from '../filter/CartFilter.js'
// import CartFilterMapper from '../filter/mapper/CartFilterMapper.js'
import FindAllByCostumersUseCase from '../../../core/useCase/Cart/FindAllByCostumersUseCase.js';
 
export default class CartController extends AbstractController {
    constructor () {
        super();
        this.create = this.create.bind(this);
        this.findByCostumer = this.findByCostumer.bind(this);
        this.cartMapper = new CartMapper();
        this.cartService = new CartService();
        // this.cartFilterMapper = new CartFilterMapper();
        this.createCartUseCase = new CreateCartUseCase({
          cartService: this.cartService
        });
        this.findAllByCostumersUseCase = new FindAllByCostumersUseCase({
          cartService: this.cartService
        });
    }

    async create (req, res, next) {
      const cartModel = new CartModel(req.body);
      const cart = this.cartMapper.adapt(cartModel);
      const result = await this.createCartUseCase.createCart(cart);

      const formattedResponseData = [];

      for (const data of result.data) {
        formattedResponseData.push(this.cartMapper.adapt(data));
      }

      result.data = formattedResponseData;
      res.status(result.status);
      res.send(result.data);
    }

    // async findByCostumer (req, res, next) {
    //   const cartFilter = new CartFilter(req);
    //   const filter = this.cartFilterMapper.adapt(cartFilter);

    //   const result = await this.findAllByCostumersUseCase.findAllCart(filter);

    //   const formattedResponseData = [];

    //   for (const data of result.data) {
    //     formattedResponseData.push(this.cartMapper.adapt(data));
    //   }

    //   result.data = formattedResponseData;

    //   res.status(result.status);
    //   res.send(result.data);
    // }
}