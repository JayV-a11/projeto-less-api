import AbstractEntity from "./AbstractEntity.js";

export default class Book extends AbstractEntity {
  constructor({ id = null, name = null, autor = "", editora = '', ano = '', edicao = '', inactive = false } = {}) {
    super();
    this.id = id;
    this.name = name;
    this.autor = autor;
    this.editora = editora;
    this.ano = ano;
    this.edicao = edicao;
    this.inactive = inactive;
  }
}
