import AbstractModel from './AbstractModel.js';

export default class BookModel extends AbstractModel {
    constructor ({
        id = null,
        name = '',
        autor = '',
        editora = '',
        ano = '',
        edicao = '',
        inactive = false,
        quantidade = 0,
        price = '',
    } = {}) {
        super();
        this.id = id;
        this.name = name,
        this.editora = editora;
        this.ano = ano;
        this.edicao = edicao;
        this.autor = autor;
        this.inactive = inactive;
        this.quantidade = quantidade;
        this.price = price;
    }

}