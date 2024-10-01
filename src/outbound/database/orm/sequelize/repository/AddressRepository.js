import IAddressRepository from "../../../../../core/repository/IAddressRepository.js";
import AddressModel from "../model/AddressModel.js";

export default class AddressRepository extends IAddressRepository {
  constructor() {
    super(AddressModel.init());
  }

  async save(address) {
    try {
      const body = {
        customer_id: address.customer_id,
        tipo_residencia: address.tipo_residencia,
        tipo_logradouro: address.tipo_logradouro,
        logradouro: address.logradouro,
        numero: address.numero,
        bairro: address.bairro,
        cep: address.cep,
        cidade: address.cidade,
        estado: address.estado,
        pais: address.pais,
        tipo_endereco: address.tipo_endereco,
      };

      if (address.observacoes && address.observacoes !== "")
        body.observacoes = address.observacoes;

      const createdAddress = await this.connection.create(body);
      return createdAddress;
    } catch (error) {
      console.error("Erro ao salvar o endereço:", error);
      throw new Error("Erro ao salvar o endereço.");
    }
  }

  async update(address) {
    try {
      // Cria um objeto data vazio
      const data = {};

      // Adiciona somente os campos não nulos e não vazios ao data
      const fields = [
        "tipo_residencia",
        "tipo_logradouro",
        "logradouro",
        "numero",
        "bairro",
        "cep",
        "cidade",
        "estado",
        "pais",
        "tipo_endereco",
      ];

      for (const field of fields) {
        if (
          address[field] !== null &&
          address[field] !== undefined &&
          address[field] !== ""
        ) {
          data[field] = address[field];
        }
      }

      return await this.connection.update(data, {
        where: {
          id: address.id,
        },
      });
    } catch (error) {
      console.error("Erro ao salvar o endereço:", error);
      throw new Error("Erro ao salvar o endereço."); // Opcional: Customize a mensagem de erro conforme necessário
    }
  }

  async findAll(filter) {
    return await this.connection.findAll(filter);
  }

  async delete(address) {
    try {
      if (!address.id) {
        throw new Error("ID do endereço não fornecido.");
      }

      const result = await this.connection.destroy({
        where: {
          id: address.id,
        },
      });

      if (result === 0) {
        throw new Error("Nenhum endereço encontrado para excluir.");
      }

      return result;
    } catch (error) {
      console.error("Erro ao excluir o endereço:", error);
      throw new Error("Erro ao excluir o endereço."); 
    }
  }
}
