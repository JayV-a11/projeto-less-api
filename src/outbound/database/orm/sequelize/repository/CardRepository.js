import ICardRepository from "../../../../../core/repository/ICardRepository.js";
import CardModel from "../model/CardModel.js";

export default class CardRepository extends ICardRepository {
  constructor() {
    super(CardModel.init());
  }

  async save(card) {
    const body = {
      customer_id: card.customer_id,
      numero_cartao: card.numero_cartao,
      nome_cartao: card.nome_cartao,
      validade: card.validade,
      bandeira: card.bandeira,
      codigo_seguranca: card.codigo_seguranca,
      preferencial: card.preferencial,
    };

    return await this.connection.create(body);
  }

  async update(card) {
    try {
      return await this.connection.update(card, {
        where: {
          id: card.id,
        },
      });
    } catch (error) {
      console.error("Erro ao salvar o cartão:", error);
      throw new Error("Erro ao salvar o cartão."); 
    }
  }

  async delete(card) {
    try {
      // Verifica se o ID é válido
      if (!card.id) {
        throw new Error("ID do cartão não fornecido.");
      }

      // Executa a exclusão
      const result = await this.connection.destroy({
        where: {
          id: card.id,
        },
      });

      // Verifica se a exclusão foi bem-sucedida
      if (result === 0) {
        throw new Error("Nenhum cartão encontrado para excluir.");
      }

      return result;
    } catch (error) {
      console.error("Erro ao excluir o cartão:", error);
      throw new Error("Erro ao excluir o cartão."); 
    }
  }

  async findAll(filter) {
    return await this.connection.findAll(filter);
  }
}
