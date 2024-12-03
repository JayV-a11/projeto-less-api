import AbstractController from './AbstractController.js';
import CartModel from '../model/CartModel.js';
import CartService from '../../../outbound/service/CartService.js';
import CartMapper from '../model/mapper/CartMapper.js';
import CreateCartUseCase from '../../../core/useCase/Cart/CreateCartUseCase.js';
import CartFilter from '../filter/CartFilter.js'
import CartFilterMapper from '../filter/mapper/CartFilterMapper.js'
import FindAllByCostumersUseCase from '../../../core/useCase/Cart/FindAllByCostumersUseCase.js';
import AddCartItemUseCase from '../../../core/useCase/Cart/AddCartItemUseCase.js';
import UpdateCartItemUseCase from '../../../core/useCase/Cart/UpdateCartItemUseCase.js';
import DeleteCartItemUseCase from '../../../core/useCase/Cart/DeleteCartItemUseCase.js';
import FindAllByCartUseCase from '../../../core/useCase/Cart/FindAllByCartUseCase.js';
import CartItemModel from '../model/CartItemModel.js';
import CartItemMapper from '../model/mapper/CartItemMapper.js';
 
export default class CartController extends AbstractController {
    constructor () {
        super();
        this.create = this.create.bind(this);
        this.findByCostumer = this.findByCostumer.bind(this);
        this.addCartItem = this.addCartItem.bind(this);
        this.updateCartItem = this.updateCartItem.bind(this);
        this.findItemsByCart = this.findItemsByCart.bind(this);
        this.deleteCartItem = this.deleteCartItem.bind(this);
        this.cartMapper = new CartMapper();
        this.cartItemMapper = new CartItemMapper();
        this.cartService = new CartService();
        this.cartFilterMapper = new CartFilterMapper();
        this.createCartUseCase = new CreateCartUseCase({
          cartService: this.cartService
        });
        this.findAllByCostumersUseCase = new FindAllByCostumersUseCase({
          cartService: this.cartService
        });
        this.addCartItemUseCase = new AddCartItemUseCase({
          cartService: this.cartService
        })
        this.updateCartItemUseCase = new UpdateCartItemUseCase({
          cartService: this.cartService
        })
        this.deleteCartItemUseCase = new DeleteCartItemUseCase({
          cartService: this.cartService
        })
        this.findAllByCartUseCase = new FindAllByCartUseCase({
          cartService: this.cartService
        })
    }

    async addCartItem  (req, res, next) {
      const cartItemModel = new CartItemModel(req.body);
      const cart = this.cartItemMapper.adapt(cartItemModel);
      const result = await this.addCartItemUseCase.addItem(cart);

      const formattedResponseData = [];
      for (const data of result.data) {
        formattedResponseData.push(data);
      }

      result.data = formattedResponseData;
      res.status(result.status);
      res.send(result.data);
    }

    async updateCartItem  (req, res, next) {
      const cartItemModel = new CartItemModel(req.body);
      const cart = this.cartItemMapper.adapt(cartItemModel);
      const result = await this.updateCartItemUseCase.updateItem(cart);

      const formattedResponseData = [];

      for (const data of result.data) {
        formattedResponseData.push(data);
      }

      result.data = formattedResponseData;
      res.status(result.status);
      res.send(result.data);
    }

    async deleteCartItem  (req, res, next) {
      const result = await this.deleteCartItemUseCase.deleteItem(req.query);

      const formattedResponseData = [];

      for (const data of result.data) {
        formattedResponseData.push(data);
      }

      result.data = formattedResponseData;
      res.status(result.status);
      res.send(result.data);
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

    async findItemsByCart (req, res, next) {
      const result = await this.findAllByCartUseCase.findByCart(req.query);

      const formattedResponseData = [];

      for (const data of result.data) {
        formattedResponseData.push(this.cartMapper.adapt(data));
      }

      result.data = formattedResponseData;

      res.status(result.status);
      res.send(result.data);
    }

    async findByCostumer (req, res, next) {
      const result = await this.findAllByCostumersUseCase.findByCostumer(req.query);

      const formattedResponseData = [];

      for (const data of result.data) {
        formattedResponseData.push(this.cartMapper.adapt(data));
      }

      result.data = formattedResponseData;

      res.status(result.status);
      res.send(result.data);
    }
}