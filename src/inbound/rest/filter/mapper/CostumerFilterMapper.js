import AbstractFilter from '../../../../core/filter/AbstractFilter.js';

export default class CostumerFilterMapper {
    constructor() {}

    adapt(costumerFilter) {
        const filter = new AbstractFilter();

        const filterKeys = Object.keys(costumerFilter.filter);

        const fields = {};

        for (const key of filterKeys) {
            if(key === 'limit') {
                filter.limit = costumerFilter.filter[key];
                continue;
            }
            if(key === 'page') {
                filter.page = costumerFilter.filter[key];
                continue;
            }
            if(key === 'group') {
                filter.group = costumerFilter.filter[key].split(',');
                continue;
            }
            if(key === 'sort') {
                filter.sort = costumerFilter.filter[key].split(',');
                continue;
            }
            if(key === 'id') {
                fields[key] = costumerFilter.filter[key];
                continue;
            }
            if(key === 'name') {
                fields[key] = costumerFilter.filter[key];
                continue;
            }
            if(key === 'email') {
                fields[key] = costumerFilter.filter[key];
                continue;
            }
            if(key === 'inactive') {
                fields[key] = costumerFilter.filter[key];
                continue;
            }
        }

        if (Object.keys(fields).length > 0) {
            filter.fields = fields;
        }

        return filter;
    }
}