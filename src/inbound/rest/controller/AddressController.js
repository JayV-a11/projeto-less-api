import AbstractController from './AbstractController.js';
import AddressModel from '../model/AddressModel.js';
import AddressService from '../../../outbound/service/AddressService.js';
import AddressMapper from '../model/mapper/AddressMapper.js';
import FindAllByCostumersUseCase from '../../../core/useCase/Address/FindAllByCostumersUseCase.js';
import CreateAddressUseCase from '../../../core/useCase/Address/CreateAddressUseCase.js';
import UpdateAddressUseCase from '../../../core/useCase/Address/UpdateAddressUseCase.js';
import DeleteAddressUseCase from '../../../core/useCase/Address/DeleteAddressUseCase.js';
import AddressFilter from '../filter/AddressFilter.js'
import AddressFilterMapper from '../filter/mapper/AddressFilterMapper.js'

export default class AddressController extends AbstractController {
    constructor () {
        super();
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
        this.findByCostumer = this.findByCostumer.bind(this);
        this.addressMapper = new AddressMapper();
        this.addressService = new AddressService();
        this.addressFilterMapper = new AddressFilterMapper();
        this.createAddressUseCase = new CreateAddressUseCase({
          addressService: this.addressService
        });
        this.updateAddressUseCase = new UpdateAddressUseCase({
          addressService: this.addressService
        })
        this.deleteAddressUseCase = new DeleteAddressUseCase({
          addressService: this.addressService
        })
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

    async update(req, res, next) {
      const addressModel = new AddressModel(req.body);
      const address = this.addressMapper.adapt(addressModel);
      const result = await this.updateAddressUseCase.updateAddress(address);
      const formattedResponseData = [];

      for (const data of result.data) {
        formattedResponseData.push(this.addressMapper.adapt(data));
      }

      result.data = formattedResponseData;
      res.status(result.status);
      res.send(result.data);
    }

    async delete(req, res, next) {
      const addressModel = new AddressModel(req.query);
      const address = this.addressMapper.adapt(addressModel);
      const result = await this.deleteAddressUseCase.deleteAddress(address);
      const formattedResponseData = [];

      for (const data of result.data) {
        formattedResponseData.push(this.addressMapper.adapt(data));
      }

  
      result.data = formattedResponseData;
      res.status(result.status);
      res.send(result.data);
    }

    async findByCostumer (req, res, next) {
      const result = await this.findAllByCostumersUseCase.findAllAddress(req.query);

      const formattedResponseData = [];

      for (const data of result.data) {
        formattedResponseData.push(this.addressMapper.adapt(data));
      }

      result.data = formattedResponseData;

      res.status(result.status);
      res.send(result.data);
    }
}