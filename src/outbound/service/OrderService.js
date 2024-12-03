import IDefaultService from "../../core/service/IDefaultService.js";
import OrderRepository from "../database/orm/sequelize/repository/OrderRepository.js";
import OrderFilterMapper from "../database/orm/sequelize/filter/mapper/OrderFilterMapper.js";

export default class OrderService extends IDefaultService {
  constructor({ orderRepository = null } = {}) {
    super();
    this.createOrder = this.createOrder.bind(this);
    this.createOrderCart = this.createOrderCart.bind(this);
    this.updateOrder = this.updateOrder.bind(this);
    this.getOrdersByCostumer = this.getOrdersByCostumer.bind(this);
    this.getOrdersForAnalisy = this.getOrdersForAnalisy.bind(this);
    this.getOrders = this.getOrders.bind(this);
    this.orderRepository = new OrderRepository();
    this.orderFilterMapper = new OrderFilterMapper();
  }

  async createOrder(order) {
    const res = await this.orderRepository.save(order);
    return res;
  }

  async createOrderCart(order) {
    const res = await this.orderRepository.createOrderCart(order);
    return res;
  }

  async updateOrder(order) {
    const res = await this.orderRepository.updateOrder(order);
    return res;
  }

  async getOrders() {
    const res = await this.orderRepository.getAll();
    return res;
  }

  async getOrdersByCostumer(order) {
    const res = await this.orderRepository.getOrdersByCostumer(order);
    return res;
  }

  async getOrdersForAnalisy(filter) {
    const orderFilter = this.orderFilterMapper.adapt(filter);
    const res = await this.orderRepository.getOrdersForAnalisy(orderFilter);
    return res;
  }
}
