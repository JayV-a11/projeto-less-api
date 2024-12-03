import AbstractController from './AbstractController.js';
import CupomService from '../../../outbound/service/CupomService.js';
import CreateCupomUseCase from '../../../core/useCase/Cupom/CreateCupomUseCase.js';
import UpdateCupomUseCase from '../../../core/useCase/Cupom/UpdateCupomUseCase.js';
import GetCupomByCostumerUseCase from '../../../core/useCase/Cupom/GetCupomByCostumerUseCase.js';

export default class CupomController extends AbstractController {
    constructor () {
        super();
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.getByCostumer = this.getByCostumer.bind(this);
        this.cupomService = new CupomService();
        this.createCupomUseCase = new CreateCupomUseCase({
          cupomService: this.cupomService
        });
        this.updateCupomUseCase = new UpdateCupomUseCase({
          cupomService: this.cupomService
        });
        this.getCupomByCostumerUseCase = new GetCupomByCostumerUseCase({
          cupomService: this.cupomService
        })
    }

    async getByCostumer (req, res, next) {
      const result = await this.getCupomByCostumerUseCase.get(req.query);

      const formattedResponseData = [];

      for (const data of result.data) {
        formattedResponseData.push(data);
      }

      result.data = formattedResponseData;
      res.status(result.status);
      res.send(result.data[0]);
    }

    async update (req, res, next) {
      const order = req.body;
      const result = await this.updateCupomUseCase.updateCupom(order);

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
      const result = await this.createCupomUseCase.createCupom(order);

      const formattedResponseData = [];

      for (const data of result.data) {
        formattedResponseData.push(data);
      }

      result.data = formattedResponseData;
      res.status(result.status);
      res.send(result.data);
    }
}