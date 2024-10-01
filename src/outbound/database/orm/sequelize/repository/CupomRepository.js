import IRepository from "../../../../../core/repository/IRepository.js";
import CupomModel from "../model/CupomModel.js";

export default class CupomRepository extends IRepository {
  constructor() {
    super(CupomModel.init());
  }

  async save(cupom) {
    try {
      const body = {
        customer_id: cupom.customer_id,
        valor: cupom.valor,
        ativo: cupom.pagamento,
      };

      return await this.connection.create(body);
    } catch (error) {
      console.error("Erro ao salvar o cartão:", error);
      throw new Error("Erro ao salvar o cartão.");
    }
  }

  async updateCupom(cupom) {
    try {
      const data = {};

      const fields = ["ativo"];

      for (const field of fields) {
        if (
          cupom[field] !== null &&
          cupom[field] !== undefined &&
          cupom[field] !== ""
        ) {
          data[field] = cupom[field];
        }
      }

      return await this.connection.update(data, {
        where: {
          id: cupom.id,
        },
      });
    } catch (error) {
      console.error("Erro ao salvar o cartão:", error);
      throw new Error("Erro ao salvar o cartão.");
    }
  }

  async getCupomsByCostumer(cupom) {
    try {
      return await this.connection.findAll({
        where: {
          customer_id: cupom.customer_id,
        },
      });
    } catch (error) {
      console.error("Erro ao salvar o cartão:", error);
      throw new Error("Erro ao salvar o cartão.");
    }
  }
}
