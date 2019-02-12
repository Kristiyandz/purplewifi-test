import { 
    SORT_ASCENDING,
    SORT_DESCENDING,
    FILTER_BY_TYPE,
    DELETE,
    ADD_REPORT
 } from '../constants/action-types';
 import { utils } from '../utils/index';



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
                data: [...utils.sortAsc(state)]
            };
        case SORT_DESCENDING:
            return {
                ...state,
                data: [...utils.sortDesc(state)]
            };
        case FILTER_BY_TYPE:
        console.log(state);

            if(action.payload.length === 0) {
                console.log('its 0');
                console.log(initialState);
                return {
                    ...initialState,
                    data: [...initialState.data]
                };
            } else {
                return {
                    ...state,
                    data: [...utils.filterByType(state, action.payload)]
                };
            }
            
        case DELETE:
            return {
                // ...state,
                // data: [...utils.deleteReport(state)]
            };
        case ADD_REPORT:
            return {
                // ...state,
                // data: [...utils.addReport(state)]
            };
        default:
            return state;
    };

};

export default rootReducer;