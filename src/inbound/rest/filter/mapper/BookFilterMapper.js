import AbstractFilter from '../../../../core/filter/AbstractFilter.js';

export default class BookFilterMapper {
    constructor() {}

    adapt(bookFilter) {
        const filter = new AbstractFilter();

        const filterKeys = Object.keys(bookFilter.filter);

        const fields = {};

        for (const key of filterKeys) {
            if(key === 'limit') {
                filter.limit = bookFilter.filter[key];
                continue;
            }
            if(key === 'page') {
                filter.page = bookFilter.filter[key];
                continue;
            }
            if(key === 'group') {
                filter.group = bookFilter.filter[key].split(',');
                continue;
            }
            if(key === 'sort') {
                filter.sort = bookFilter.filter[key].split(',');
                continue;
            }
            if(key === 'id') {
                fields[key] = bookFilter.filter[key];
                continue;
            }
            if(key === 'name') {
                fields[key] = bookFilter.filter[key];
                continue;
            }
            if(key === 'autor') {
                fields[key] = bookFilter.filter[key];
                continue;
            }
            if(key === 'edicao') {
                fields[key] = bookFilter.filter[key];
                continue;
            }
            if(key === 'ano') {
                fields[key] = bookFilter.filter[key];
                continue;
            }
            if(key === 'editora') {
                fields[key] = bookFilter.filter[key];
                continue;
            }
            if(key === 'inactive') {
                fields[key] = bookFilter.filter[key];
                continue;
            }
        }

        if (Object.keys(fields).length > 0) {
            filter.fields = fields;
        }

        return filter;
    }
}