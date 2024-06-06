import AbstractController from './AbstractController.js';
import BookModel from '../model/BookModel.js';
import BookService from '../../../outbound/service/BookService.js';
import BookMapper from '../model/mapper/BookMapper.js';
import CreateBookUseCase from '../../../core/useCase/Book/CreateBookUseCase.js';
import UpdateBookUseCase from '../../../core/useCase/Book/UpdateBookUseCase.js';
import FindAllBooksUseCase from '../../../core/useCase/Book/FindAllBooksUseCase.js';
import BookFilter from '../filter/BookFilter.js'
import BookFilterMapper from '../filter/mapper/BookFilterMapper.js'
 
export default class BookController extends AbstractController {
    constructor () {
        super();
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.findAll = this.findAll.bind(this);
        this.bookMapper = new BookMapper();
        this.bookService = new BookService();
        this.bookFilterMapper = new BookFilterMapper();
        this.createBookUseCase = new CreateBookUseCase({
          bookService: this.bookService
        });
        this.updateBookUseCase = new UpdateBookUseCase({
          bookService: this.bookService
        });
        this.findAllBookUseCase = new FindAllBooksUseCase({
          bookService: this.bookService
        });
    }

    async create (req, res, next) {
      const bookModel = new BookModel(req.body);
      const book = this.bookMapper.adapt(bookModel);
      const result = await this.createBookUseCase.createBook(book);
      const formattedResponseData = [];

      for (const data of result.data) {
        formattedResponseData.push(this.bookMapper.adapt(data));
      }

      result.data = formattedResponseData;
      res.status(result.status);
      res.send(result.data);
    }

    async update (req, res, next) {
      const bookModel = new BookModel(req.body);
      const book = this.bookMapper.adapt(bookModel);
      const result = await this.updateBookUseCase.updateBook(book);
      const formattedResponseData = [];

      for (const data of result.data) {
        formattedResponseData.push(this.bookMapper.adapt(data));
      }

      result.data = formattedResponseData[0];
      res.status(result.status);
      res.send(result.data);
    }

    async findAll (req, res, next) {
      const bookFilter = new BookFilter(req);
      const filter = this.bookFilterMapper.adapt(bookFilter);

      const result = await this.findAllBooksUseCase.findAllBooks(filter);

      const formattedResponseData = [];

      for (const data of result.data) {
        formattedResponseData.push(this.bookMapper.adapt(data));
      }

      result.data = formattedResponseData;

      res.status(result.status);
      res.send(result.data);
    }
}