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
    }

    return await this.connection.create(body);
  }

  async findAll(filter) {
    return await this.connection.findAll(filter);
  }
}
