import IAddressService from "../../core/service/IAddressService.js";
import AddressMapper from "../database/orm/sequelize/model/mapper/AddressMapper.js";
import AddressRepository from "../database/orm/sequelize/repository/AddressRepository.js";
import AddressFilterMapper from "../database/orm/sequelize/filter/mapper/AddressFilterMapper.js";

export default class AddressService extends IAddressService {
  constructor({ addressRepository = null } = {}) {
    super();
    this.createAddress = this.createAddress.bind(this);
    this.findAllAddresses = this.findAllAddresses.bind(this);
    this.addressRepository = new AddressRepository();
    this.addressMapper = new AddressMapper();
    this.addressFilterMapper = new AddressFilterMapper();
  }

  async createAddress(address) {
    const addressModel = await this.addressRepository.save(address);
    return this.addressMapper.adapt(addressModel);
  }

  async findAllAddresses(filter) {
    const addressFilter = this.addressFilterMapper.adapt(filter);
    filter = addressFilter.mountFilter();

    const addressModels = await this.addressRepository.findAll(filter);

    const addresses = [];

    for (const addressModel of addressModels) {
      addresses.push(this.addressMapper.adapt(addressModel));
    }

    return addresses;
  }
}
