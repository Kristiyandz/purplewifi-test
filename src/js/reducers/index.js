import { 
    SORT_ASCENDING,
    SORT_DESCENDING,
    FILTER_BY_TYPE,
    DELETE,
    ADD_REPORT
 } from '../constants/action-types';
 import {utils} from '../utils/index';



import mockData from '../state-data/mock-data.json';

console.log(mockData);
const initialState = {
    data: mockData
};

console.log(initialState)

function rootReducer(state = initialState, action) {

    switch(action.type) {
        case SORT_ASCENDING:
            return {
                ...state,
                data: [...utils.sortAsc(state, action.type)]
            };
        case SORT_DESCENDING:
            return {
                ...state,
                data: [...utils.sortDesc(state, action.type)]
            };
        case FILTER_BY_TYPE:
            return {
                ...state,
                data: [...utils.filterByType(state)]
            };
        case DELETE:
            return {
                ...state,
                data: [...utils.deleteReport(state)]
            };
        case ADD_REPORT:
            return {
                ...state,
                data: [...utils.addReport(state)]
            };
        default:
            return state;
    };

};

export default rootReducer;