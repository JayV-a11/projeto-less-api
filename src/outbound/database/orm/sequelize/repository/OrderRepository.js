import IRepository from "../../../../../core/repository/IRepository.js";
import OrderModel from "../model/OrderModel.js";
import CardOrderModel from "../model/CardOrderModel.js";
export default class OrderRepository extends IRepository {
  constructor() {
    super(OrderModel.init());
  }

  async save(order) {
    try {
      const body = {
        customer_id: order.customer_id,
        address_id: order.address_id,
        book_id: order.book_id,
        status: order.status,
        valor: order.valor,
        frete: order.frete,
        pagamento: order.pagamento,
      };

      return await this.connection.create(body);
    } catch (error) {
      console.error("Erro ao salvar o cartão:", error);
      throw new Error("Erro ao salvar o cartão.");
    }
  }

  async updateOrder(order) {
    try {
      const data = {};

      // Adiciona somente os campos não nulos e não vazios ao data
      const fields = ["status", "pagamento"];

      for (const field of fields) {
        if (
          order[field] !== null &&
          order[field] !== undefined &&
          order[field] !== ""
        ) {
          data[field] = order[field];
        }
      }

      return await this.connection.update(data, {
        where: {
          id: order.id,
        },
      });
    } catch (error) {
      console.error("Erro ao salvar o cartão:", error);
      throw new Error("Erro ao salvar o cartão.");
    }
  }

  async createOrderCart(order) {
    try {
      const orderCardModel = CardOrderModel.init();

      const body = {
        order_id: order.order_id,
        card_id: order.card_id,
      };

      const res = await orderCardModel.create(body);

      return res;
    } catch (error) {
      console.error("Erro ao salvar o cartão:", error);
      throw new Error("Erro ao salvar o cartão.");
    }
  }

  async getAll() {
    try {
      return await this.connection.findAll();
    } catch (error) {
      console.error("Erro ao salvar o cartão:", error);
      throw new Error("Erro ao salvar o cartão.");
    }
  }

  async getOrdersByCostumer(order) {
    try {
      console.log(order)
      return await this.connection.findAll({
        where: {
          customer_id: order.customer_id,
        },
      });
    } catch (error) {
      console.error("Erro ao salvar o cartão:", error);
      throw new Error("Erro ao salvar o cartão.");
    }
  }
}
