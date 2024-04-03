import ICardRepository from "../../../../../core/repository/ICardRepository.js";
import CardModel from "../model/CardModel.js";
export default class AddressRepository extends ICardRepository {
  constructor() {
    super(CardModel.init());
  }

  async save(card) {
    const body = {
        customer_id : card.customer_id,
        number : card.number,
        titular : card.titular,
        expiration : card.expiration,
        main : card.main,
    }

    return await this.connection.create(body);
  }

  async findAll(filter) {
    return await this.connection.findAll(filter);
  }
}
