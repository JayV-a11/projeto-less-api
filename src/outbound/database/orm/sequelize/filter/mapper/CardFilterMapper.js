import CardFilter from '../CardFilter.js';

export default class CardFilterMapper {
    constructor() {}

    adapt(filter) {
        const cardFilter = new CardFilter();

        const filterKeys = Object.keys(filter);

        for (const key of filterKeys) {
            if(key === 'limit' && filter.limit) {
                cardFilter[key] = Number(filter.limit);
                continue;
            }
            if(key === 'group' && filter.group) {
                cardFilter[key] = [];
                for (const group of filter.group) {
                    cardFilter[key].push(group);
                }
                continue;
            }
            if(key === 'sort' && filter.sort) {
                cardFilter[key] = [];
                for (const sort of filter.sort) {
                    cardFilter[key].push(sort);
                }
                continue;
            }

            if (key === 'fields' && filter.fields) {
                const fieldsKeys = Object.keys(filter.fields);
                for (const fieldKey of fieldsKeys) {
                    cardFilter.concat({[fieldKey]: filter.fields[fieldKey]});
                }
            }
        }

        if (filter.page && filter.limit) {
            cardFilter.offset = ((filter.page - 1) * filter.limit);
        }

        return cardFilter;
    }
}