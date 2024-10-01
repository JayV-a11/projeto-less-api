import AbstractFilter from '../../../../core/filter/AbstractFilter.js';

export default class CartFilterMapper {
    constructor() {}

    adapt(cardFilter) {
        const filter = new AbstractFilter();

        const filterKeys = Object.keys(cardFilter.filter);

        const fields = {};

        for (const key of filterKeys) {
            if(key === 'limit') {
                filter.limit = cardFilter.filter[key];
                continue;
            }
            if(key === 'page') {
                filter.page = cardFilter.filter[key];
                continue;
            }
            if(key === 'group') {
                filter.group = cardFilter.filter[key].split(',');
                continue;
            }
            if(key === 'sort') {
                filter.sort = cardFilter.filter[key].split(',');
                continue;
            }
            if(key === 'id') {
                fields[key] = cardFilter.filter[key];
                continue;
            }
            if(key === 'costumer_id') {
                fields[key] = cardFilter.filter[key];
                continue;
            }
        }

        if (Object.keys(fields).length > 0) {
            filter.fields = fields;
        }

        return filter;
    }
}