import AbstractController from "./AbstractController.js";
import CostumerModel from "../model/CostumerModel.js";
import CostumerService from "../../../outbound/service/CostumerService.js";
import CostumerMapper from "../model/mapper/CostumerMapper.js";
import CreateCostumerUseCase from "../../../core/useCase/Costumer/CreateCostumerUseCase.js";
import UpdateCostumerUseCase from "../../../core/useCase/Costumer/UpdateCostumerUseCase.js";
import FindAllCostumersUseCase from "../../../core/useCase/Costumer/FindAllCostumersUseCase.js";
import InactivateCostumerUseCase from "../../../core/useCase/Costumer/InactivateCostumerUseCase.js";
import CostumerFilter from "../filter/CostumerFilter.js";
import CostumerFilterMapper from "../filter/mapper/CostumerFilterMapper.js";
export default class CostumerController extends AbstractController {
  constructor() {
    super();
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.inactivate = this.inactivate.bind(this);
    this.findAll = this.findAll.bind(this);
    this.costumerMapper = new CostumerMapper();
    this.costumerService = new CostumerService();
    this.costumerFilterMapper = new CostumerFilterMapper();
    this.createCostumerUseCase = new CreateCostumerUseCase({
      costumerService: this.costumerService,
    });
    this.updateCostumerUseCase = new UpdateCostumerUseCase({
      costumerService: this.costumerService,
    });
    this.inactivateCostumerUseCase = new InactivateCostumerUseCase({
      costumerService: this.costumerService,
    });
    this.findAllCostumersUseCase = new FindAllCostumersUseCase({
      costumerService: this.costumerService,
    });
  }

  async create(req, res, next) {
    const costumerModel = new CostumerModel(req.body);
    const costumer = this.costumerMapper.adapt(costumerModel);
    const result = await this.createCostumerUseCase.createCostumer(costumer);
    const formattedResponseData = [];

    for (const data of result.data) {
      formattedResponseData.push(this.costumerMapper.adapt(data));
    }

    result.data = formattedResponseData;
    res.status(result.status);
    if (result.error.length <= 0) res.send(result.data);
    else res.send(result.error);
  }

  async update(req, res, next) {
    const costumerModel = new CostumerModel(req.body);
    const costumer = this.costumerMapper.adapt(costumerModel);
    const result = await this.updateCostumerUseCase.updateCostumer(costumer);
    const formattedResponseData = [];

    for (const data of result.data) {
      formattedResponseData.push(this.costumerMapper.adapt(data));
    }

    result.data = formattedResponseData[0];
    res.status(result.status);
    res.send(result.data);
  }

  async inactivate(req, res, next) {
    const costumerModel = new CostumerModel(req.body);
    const costumer = this.costumerMapper.adapt(costumerModel);
    const result = await this.inactivateCostumerUseCase.inactivateCostumer(costumer);
    const formattedResponseData = [];

    for (const data of result.data) {
      formattedResponseData.push(this.costumerMapper.adapt(data));
    }

    result.data = formattedResponseData[0];
    if (result.error.length <= 0) res.send(result.data);
    else res.send(result.error);
  }

  async findAll(req, res, next) {
    const costumerFilter = new CostumerFilter(req);
    const filter = this.costumerFilterMapper.adapt(costumerFilter);

    const result = await this.findAllCostumersUseCase.findAllCostumers(filter);

    const formattedResponseData = [];

    for (const data of result.data) {
      formattedResponseData.push(this.costumerMapper.adapt(data));
    }

    result.data = formattedResponseData;

    res.status(result.status);
    res.send(result.data);
  }
}
