import IRepository from "../../../../../core/repository/IRepository.js";
import OrderModel from "../model/OrderModel.js";
import CardOrderModel from "../model/CardOrderModel.js";
export default class OrderRepository extends IRepository {
  constructor() {
    super(OrderModel.init());
    this.sequelize = OrderModel.sequelize;
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
        quantidade: order.quantidade,
      };

      return await this.connection.create(body);
    } catch (error) {
      console.error("Erro", error);
      throw new Error("Erro");
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
      console.error("Erro", error);
      throw new Error("Erro");
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
      console.error("Erro", error);
      throw new Error("Erro");
    }
  }

  async getAll() {
    try {
      return await this.connection.findAll();
    } catch (error) {
      console.error("Erro", error);
      throw new Error("Erro");
    }
  }

  async getOrdersByCostumer(order) {
    try {
      return await this.connection.findAll({
        where: {
          customer_id: order.customer_id,
        },
      });
    } catch (error) {
      console.error("Erro", error);
      throw new Error("Erro");
    }
  }

  async getOrdersForAnalisy(filter) {
    try {

  
      const query = `
          WITH orders_with_books AS (
        SELECT 
            o.quantidade,
           CAST(REPLACE(o.valor, ',', '.') AS NUMERIC) AS valor_numeric,
            b.name AS book_name,
            b.editora AS book_editora,
            o.created_at AS data_venda
        FROM "Orders" o
        INNER JOIN "Books" b ON o.book_id = b.id

       WHERE 
             o.created_at >= ${filter.where.start} AND o.created_at <= ${filter.where.end}
    )
    SELECT 
        quantidade,
        valor_numeric AS valor,
        book_name,
        book_editora,
        data_venda
    FROM orders_with_books;
  `;
      const [result] = await this.sequelize.query(query);
      return result;
    } catch (error) {
      console.error("Erro", error);
      throw new Error("Erro");
    }
  }
}
