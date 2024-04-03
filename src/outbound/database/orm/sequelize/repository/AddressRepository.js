import IAddressRepository from "../../../../../core/repository/IAddressRepository.js";
import AddressModel from "../model/AddressModel.js";
export default class AddressRepository extends IAddressRepository {
  constructor() {
    super(AddressModel.init());
  }

  async save(address) {
    const body = {
        customer_id: address.customer_id,
        cep: address.cep,
        rua: address.rua,
        numero: address.numero,
        bairro: address.bairro,
        cidade: address.cidade,
        estado: address.estado,
    }

    if(address.complemento) 
        body.complemento = complemento;

    return await this.connection.create(body);
  }

  async findAll(filter) {
    return await this.connection.findAll(filter);
  }
}
