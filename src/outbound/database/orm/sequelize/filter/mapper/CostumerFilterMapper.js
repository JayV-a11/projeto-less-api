import CostumerFilter from '../CostumerFilter.js';

export default class CostumerFilterMapper {
    constructor() {}

    adapt(filter) {
        const costumerFilter = new CostumerFilter();

        const filterKeys = Object.keys(filter);

        for (const key of filterKeys) {
            if(key === 'limit' && filter.limit) {
                costumerFilter[key] = Number(filter.limit);
                continue;
            }
            if(key === 'group' && filter.group) {
                costumerFilter[key] = [];
                for (const group of filter.group) {
                    costumerFilter[key].push(group);
                }
                continue;
            }
            if(key === 'sort' && filter.sort) {
                costumerFilter[key] = [];
                for (const sort of filter.sort) {
                    costumerFilter[key].push(sort);
                }
                continue;
            }

            if (key === 'fields' && filter.fields) {
                const fieldsKeys = Object.keys(filter.fields);
                for (const fieldKey of fieldsKeys) {
                    costumerFilter.concat({[fieldKey]: filter.fields[fieldKey]});
                }
            }
        }

        if (filter.page && filter.limit) {
            costumerFilter.offset = ((filter.page - 1) * filter.limit);
        }

        return costumerFilter;
    }
}