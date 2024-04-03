import AbstractController from './AbstractController.js';
import CardModel from '../model/CardModel.js';
import CardService from '../../../outbound/service/CardService.js';
import CardMapper from '../model/mapper/CardMapper.js';
import CreateCardUseCase from '../../../core/useCase/Card/CreateCardUseCase.js';
import CardFilter from '../filter/CardFilter.js'
import CardFilterMapper from '../filter/mapper/CardFilterMapper.js'
import FindAllByCostumersUseCase from '../../../core/useCase/Card/FindAllByCostumersUseCase.js';
 
export default class CardController extends AbstractController {
    constructor () {
        super();
        this.create = this.create.bind(this);
        this.findByCostumer = this.findByCostumer.bind(this);
        this.cardMapper = new CardMapper();
        this.cardService = new CardService();
        this.cardFilterMapper = new CardFilterMapper();
        this.createCardUseCase = new CreateCardUseCase({
          cardService: this.cardService
        });
        this.findAllByCostumersUseCase = new FindAllByCostumersUseCase({
          cardService: this.cardService
        });
    }

    async create (req, res, next) {
      const cardModel = new CardModel(req.body);
      const card = this.cardMapper.adapt(cardModel);
      const result = await this.createCardUseCase.createCard(card);

      const formattedResponseData = [];

      for (const data of result.data) {
        formattedResponseData.push(this.cardMapper.adapt(data));
      }

      result.data = formattedResponseData;
      res.status(result.status);
      res.send(result.data);
    }

    async findByCostumer (req, res, next) {
      const cardFilter = new CardFilter(req);
      const filter = this.cardFilterMapper.adapt(cardFilter);

      const result = await this.findAllByCostumersUseCase.findAllCard(filter);

      const formattedResponseData = [];

      for (const data of result.data) {
        formattedResponseData.push(this.cardMapper.adapt(data));
      }

      result.data = formattedResponseData;

      res.status(result.status);
      res.send(result.data);
    }
}