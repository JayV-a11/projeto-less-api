import AbstractController from './AbstractController.js';
import OrderService from '../../../outbound/service/OrderService.js';
import CreateOrderUseCase from '../../../core/useCase/Order/CreateOrderUseCase.js';
import CreateOrderCartUseCase from '../../../core/useCase/Order/CreateOrderCartUseCase.js';
import UpdateOrderUseCase from '../../../core/useCase/Order/UpdateOrderUseCase.js';
import GetOrderUseCase from '../../../core/useCase/Order/GetOrderUseCase.js';
import GetOrderByCostumerUseCase from '../../../core/useCase/Order/GetOrderByCostumerUseCase.js';
import GetOrderForAnaliseUseCase from '../../../core/useCase/Order/GetOrderForAnaliseUseCase.js';

export default class CartController extends AbstractController {
    constructor () {
        super();
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.getAll = this.getAll.bind(this);
        this.getByCostumer = this.getByCostumer.bind(this);
        this.createOrderCard = this.createOrderCard.bind(this);
        this.getAllAnalise = this.getAllAnalise.bind(this);
        this.orderService = new OrderService();
        this.getOrderForAnaliseUseCase = new GetOrderForAnaliseUseCase({
          orderService: this.orderService
        })
        this.createOrderUseCase = new CreateOrderUseCase({
          orderService: this.orderService
        });
        this.getOrderUseCase = new GetOrderUseCase({
          orderService: this.orderService
        });
        this.createOrderCartUseCase = new CreateOrderCartUseCase({
          orderService: this.orderService
        });
        this.updateOrderUseCase = new UpdateOrderUseCase({
          orderService: this.orderService
        });
        this.getOrderByCostumerUseCase = new GetOrderByCostumerUseCase({
          orderService: this.orderService
        })
    }

    async createOrderCard (req, res, next) {
      const order = req.body;
      const result = await this.createOrderCartUseCase.createOrderCart(order);

      const formattedResponseData = [];

      for (const data of result.data) {
        formattedResponseData.push(data);
      }

      result.data = formattedResponseData;
      res.status(result.status);
      res.send(result.data);
    }

    async getAll (req, res, next) {
      const result = await this.getOrderUseCase.get();

      const formattedResponseData = [];

      for (const data of result.data) {
        formattedResponseData.push(data);
      }

      result.data = formattedResponseData;
      res.status(result.status);
      res.send(result.data);
    }

    async getAllAnalise (req, res, next) {
      const filter = req.query;
      const result = await this.getOrderForAnaliseUseCase.get(filter);
      const formattedResponseData = [];

      for (const data of result.data) {
        formattedResponseData.push(data);
      }

      result.data = formattedResponseData;
      res.status(result.status);
      res.send(result.data);
    }

    async getByCostumer (req, res, next) {
      const result = await this.getOrderByCostumerUseCase.get(req.query);

      const formattedResponseData = [];

      for (const data of result.data) {
        formattedResponseData.push(data);
      }

      result.data = formattedResponseData;
      res.status(result.status);
      res.send(result.data);
    }

    async update (req, res, next) {
      const order = req.body;
      const result = await this.updateOrderUseCase.updateOrder(order);

      const formattedResponseData = [];

      for (const data of result.data) {
        formattedResponseData.push(data);
      }

      result.data = formattedResponseData;
      res.status(result.status);
      res.send(result.data);
    }
    
    async create (req, res, next) {
      const order = req.body;
      const result = await this.createOrderUseCase.createOrder(order);

      const formattedResponseData = [];

      for (const data of result.data) {
        formattedResponseData.push(data);
      }

      result.data = formattedResponseData;
      res.status(result.status);
      res.send(result.data);
    }
}