import ICardRepository from "../../../../../core/repository/ICardRepository.js";
import CartModel from "../model/CartModel.js";
import BookCartModel from "../model/BookCartModel.js";
export default class CartRepository extends ICardRepository {
  constructor() {
    super(CartModel.init());
  }

  async save(cart) {
    try {
    const body = {
        customer_id : cart.customer_id,
    }

    return await this.connection.create(body);
  } catch (error) {
    console.error("Erro ao salvar o cartão:", error);
    throw new Error("Erro ao salvar o cartão."); 
  }
  }

  async add(cart) {
    const body = {
        cart_id : cart.cart_id,
        book_id : cart.book_id,
        value : cart.value,
        quantity : cart.quantity,
    }

    const teste =  BookCartModel.init();
    return await teste.create(body);
  }

  async updateItem(cartItem) {
    try {
      const teste =  BookCartModel.init();
      return await teste.update(cartItem, {
        where: {
          id: cartItem.id,
        },
      });
    } catch (error) {
      console.error("Erro ao salvar o cartão:", error);
      throw new Error("Erro ao salvar o cartão."); 
    }
  }

  async deleteItem(cartItem) {
    try {
      if (!cartItem.id) {
        throw new Error("ID do cartão não fornecido.");
      }

      const teste =  BookCartModel.init();
      const result = await teste.destroy({
        where: {
          id: cartItem.id,
        },
      });

      if (result === 0) {
        throw new Error("Nenhum cartão encontrado para excluir.");
      }

      return result;
    } catch (error) {
      console.error("Erro ao excluir o cartão:", error);
      throw new Error("Erro ao excluir o cartão."); 
    }
  }

  async findItems(filter){
    const teste =  BookCartModel.init();
    return await teste.findAll(filter);
  }

  async findAll(filter) {
    return await this.connection.findAll(filter);
  }
}
