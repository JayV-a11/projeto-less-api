import IBookRepository from "../../../../../core/repository/IBookRepository.js";
import BookModel from "../model/BookModel.js";

export default class BookRepository extends IBookRepository {
  constructor() {
    super(BookModel.init());
  }

  async save(book) {
    const body = {
        name: book.name,
        autor: book.autor,
        editora: book.editora,
        ano: book.ano,
        edicao: book.edicao,
        inactive: book.inactive,
        quantidade: book.quantidade,
        price: book.price,
    }

    return await this.connection.create(body);
  }

  async update(cartItem) {
    try {
      return await this.connection.update(cartItem, {
        where: {
          id: cartItem.id,
        },
      });
    } catch (error) {
      console.error("Erro ao salvar o cartão:", error);
      throw new Error("Erro ao salvar o cartão."); 
    }
  }

  async findAll(filter) {
    return await this.connection.findAll(filter);
  }

  async findOne(filter) {
    return await this.connection.findAll(filter);
  }
}
