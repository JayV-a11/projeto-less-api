import AbstractController from './AbstractController.js';
import AddressModel from '../model/AddressModel.js';
import AddressService from '../../../outbound/service/AddressService.js';
import AddressMapper from '../model/mapper/AddressMapper.js';
import FindAllByCostumersUseCase from '../../../core/useCase/Address/FindAllByCostumersUseCase.js';
import CreateAddressUseCase from '../../../core/useCase/Address/CreateAddressUseCase.js';
import AddressFilter from '../filter/AddressFilter.js'
import AddressFilterMapper from '../filter/mapper/AddressFilterMapper.js'

export default class AddressController extends AbstractController {
    constructor () {
        super();
        this.create = this.create.bind(this);
        this.findByCostumer = this.findByCostumer.bind(this);
        this.addressMapper = new AddressMapper();
        this.addressService = new AddressService();
        this.addressFilterMapper = new AddressFilterMapper();
        this.createAddressUseCase = new CreateAddressUseCase({
          addressService: this.addressService
        });
        this.findAllByCostumersUseCase = new FindAllByCostumersUseCase({
          addressService: this.addressService
        })
    }

    async create (req, res, next) {
      const addressModel = new AddressModel(req.body);
      const address = this.addressMapper.adapt(addressModel);
      const result = await this.createAddressUseCase.createAddress(address);
      const formattedResponseData = [];

      for (const data of result.data) {
        formattedResponseData.push(this.addressMapper.adapt(data));
      }

      result.data = formattedResponseData;
      res.status(result.status);
      res.send(result.data);
    }

    async findByCostumer (req, res, next) {
      const addressFilter = new AddressFilter(req);
      const filter = this.addressFilterMapper.adapt(addressFilter);

      const result = await this.findAllByCostumersUseCase.findAllAddress(filter);

      const formattedResponseData = [];

      for (const data of result.data) {
        formattedResponseData.push(this.addressMapper.adapt(data));
      }

      result.data = formattedResponseData;

      res.status(result.status);
      res.send(result.data);
    }
}