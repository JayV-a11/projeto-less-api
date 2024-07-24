import ICardRepository from "../../../../../core/repository/ICardRepository.js";
import CardModel from "../model/CardModel.js";
export default class CartRepository extends ICardRepository {
  constructor() {
    super(CardModel.init());
  }

  async save(cart) {
    const body = {
        customer_id : cart.customer_id,
    }

    return await this.connection.create(body);
  }

  async findAll(filter) {
    return await this.connection.findAll(filter);
  }
}
