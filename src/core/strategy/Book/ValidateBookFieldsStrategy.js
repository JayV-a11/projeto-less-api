import AbstractStrategy from '../AbstractStrategy.js';
import Book from '../../domain/Book.js';
import Result from '../../util/Result.js';

export default class ValidateBookFieldsStrategy extends AbstractStrategy {
    constructor ({
        result = new Result()
    } = {}) {
        super();
        this.result = result;
    }

    async execute(book, result = this.result) {
        if (!typeof book === new Book()) {
            result.error.push('Entidade recebida não é um livro!');
        }

        if (!book || !book.name || book.name.length === 0) {
            result.error.push('O campo "Nome" é obrigatório!');
        }

        if (!book || !book.autor || book.autor.length === 0) {
            result.error.push('O campo "Autor" é obrigatório!');
        }

        if (!book || !book.editora || book.editora.length === 0) {
            result.error.push('O campo "Editora" é obrigatório!');
        }

        if (!book || !book.ano || book.ano.length === 0) {
            result.error.push('O campo "Ano" é obrigatório!');
        }

        if (!book || !book.edicao || book.edicao.length === 0) {
            result.error.push('O campo "Edição" é obrigatório!');
        }

        if (result.error.length > 0) {
            result.status = 406;
        }

        return {
            entity: book,
            result
        };
    }
}