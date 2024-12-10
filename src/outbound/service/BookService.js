import IBookService from "../../core/service/IBookService.js";
import BookFilterMapper from "../database/orm/sequelize/filter/mapper/BookFilterMapper.js";
import BookMapper from "../database/orm/sequelize/model/mapper/BookMapper.js";
import BookRepository from "../database/orm/sequelize/repository/BookRepository.js";

export default class CostumerService extends IBookService {
  constructor({ bookRepository = null } = {}) {
    super();
    this.createBook = this.createBook.bind(this);
    this.updateBook = this.updateBook.bind(this);
    this.updatePurchasedBook = this.updatePurchasedBook.bind(this);
    this.findAllBooks = this.findAllBooks.bind(this);
    this.find = this.find.bind(this);
    this.findOne = this.findOne.bind(this);
    this.bookRepository = new BookRepository();
    this.bookFilterMapper = new BookFilterMapper();
    this.bookMapper = new BookMapper();
  }

  async createBook(book) {
    const bookModel = await this.bookRepository.save(book);
    return this.bookMapper.adapt(bookModel);
  }

  async updatePurchasedBook(book) {
    const bookModel = await this.bookRepository.update(book);
    return this.bookMapper.adapt(bookModel);
  }

  
  async updateBook(book) {
    const bookModel = await this.bookRepository.update(book);
    return this.bookMapper.adapt(bookModel);
  }
  
  async findAllBooks(filter) {
    const bookFilter = this.bookFilterMapper.adapt(filter);
    filter = bookFilter.mountFilter();

    const bookModels = await this.bookRepository.findAll(filter);

    const books = [];

    for (const bookModel of bookModels) {
      books.push(this.bookMapper.adapt(bookModel));
    }

    return books;
  }

  async findOne(filter) {
    const bookFilter = this.bookFilterMapper.adapt(filter);
    filter = bookFilter.mountFilter();

    const bookModel = await this.bookRepository.findOne(filter);

    const bookMapper = this.bookMapper.adapt(bookModel);

    return bookMapper;
  }

  async find(filter) {
    const bookModel = await this.bookRepository.findOne({
      where: {
        id: filter.id
      },
    });

    const bookMapper = this.bookMapper.adapt(bookModel);

    return bookMapper;
  }
}
