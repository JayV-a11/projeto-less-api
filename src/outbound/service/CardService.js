import ICardService from "../../core/service/ICardService.js";
import CardMapper from "../database/orm/sequelize/model/mapper/CardMapper.js";
import CardRepository from "../database/orm/sequelize/repository/CardRepository.js";
import CardFilterMapper from "../database/orm/sequelize/filter/mapper/CardFilterMapper.js";

export default class CardService extends ICardService {
  constructor({ cardRepository = null } = {}) {
    super();
    this.createCard = this.createCard.bind(this);
    this.updateCard = this.updateCard.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
    this.cardRepository = new CardRepository();
    this.cardMapper = new CardMapper();
    this.cardFilterMapper = new CardFilterMapper();
  }

  async createCard(card) {
    const cardModel = await this.cardRepository.save(card);
    return this.cardMapper.adapt(cardModel);
  }

  async updateCard(card) {
    const cardModel = await this.cardRepository.update(card);
    return this.cardMapper.adapt(cardModel);
  }
  
  async deleteCard(card) {
    const cardModel = await this.cardRepository.delete(card);
    return this.cardMapper.adapt(cardModel);
  }

  async findAllCards(filter) {
    const cardFilter = this.cardFilterMapper.adapt(filter);
    filter = cardFilter.mountFilter();

    const cardModels = await this.cardRepository.findAll(filter);

    const cards = [];

    for (const cardModel of cardModels) {
      cards.push(this.cardMapper.adapt(cardModel));
    }

    return cards;
  }
}
