import AbstractController from './AbstractController.js';
import FaqChatUseCase from '../../../core/useCase/FaqAi/FaqChatUseCase.js';
import BookService from '../../../outbound/service/BookService.js';

export default class FaqAiController extends AbstractController {
    constructor () {
        super();
        this.chat = this.chat.bind(this);
        this.bookService = new BookService();
        this.faqChatUseCase = new FaqChatUseCase({
          bookService: this.bookService
        });
    }
    
    async chat (req, res, next) {
      const chat = req.body;
      const result = await this.faqChatUseCase.chat(chat);
      res.status(result.status);
      res.send(result.data);
    }
}