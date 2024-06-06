import IRepository from './IRepository.js';

export default class IBookRepository extends IRepository {
    constructor(connection) {
        super(connection);
    }
}