import IAddressService from "../../core/service/IAddressService.js";
import AddressMapper from "../database/orm/sequelize/model/mapper/AddressMapper.js";
import AddressRepository from "../database/orm/sequelize/repository/AddressRepository.js";
import AddressFilterMapper from "../database/orm/sequelize/filter/mapper/AddressFilterMapper.js";

export default class AddressService extends IAddressService {
  constructor({ addressRepository = null } = {}) {
    super();
    this.createAddress = this.createAddress.bind(this);
    this.updateAddress = this.updateAddress.bind(this);
    this.deleteAddress = this.deleteAddress.bind(this);
    this.findAllAddresses = this.findAllAddresses.bind(this);
    this.addressRepository = new AddressRepository();
    this.addressMapper = new AddressMapper();
    this.addressFilterMapper = new AddressFilterMapper();
  }

  async createAddress(address) {
    const addressModel = await this.addressRepository.save(address);
    return this.addressMapper.adapt(addressModel);
  }

  async updateAddress(address) {
    const addressModel = await this.addressRepository.update(address);
    return this.addressMapper.adapt(addressModel);
  }

  async deleteAddress(address) {
    const addressModel = await this.addressRepository.delete(address);
    return this.addressMapper.adapt(addressModel);
  }

  async findAllAddresses(address) {
    if (!address.customer_id) {
      throw new Error('O parâmetro address.customer_id é obrigatório.');
    }
  
    try {
      const filter = { where: { customer_id: address.customer_id } };
  
      const addressModels = await this.addressRepository.findAll(filter);
  
      const addresses = addressModels.map(addressModel => 
        this.addressMapper.adapt(addressModel)
      );
  
      return addresses;
    } catch (error) {
      console.error('Erro ao buscar endereços:', error);
      throw new Error('Erro ao buscar endereços.');
    }
  }
}
