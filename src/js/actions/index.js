import { 
    SORT_ASCENDING,
    SORT_DESCENDING,
    FILTER_BY_TYPE,
    DELETE,
    ADD_REPORT
 } from '../constants/action-types';


 export function sortAscendingAction(){
     console.log('called');
    return function(dispatch) {
        dispatch({
            type: SORT_ASCENDING,
            payload: {}
        });
    };
};

export function sortDescendingAction(){
    return function(dispatch) {
        dispatch({
            type: SORT_DESCENDING,
            payload: {}
        });
    };
};

export function filterByTypeAction(value){
    console.log(value);
    console.log('filtering');
    return function(dispatch) {
        dispatch({
            type: FILTER_BY_TYPE,
            payload: value
        });
    };
};

export function deleteReportAction(){
    return function(dispatch) {
        dispatch({
            type: DELETE,
            payload: {}
        });
    };
};

export function addReportAction(){
    return function(dispatch) {
        dispatch({
            type: ADD_REPORT,
            payload: {}
        });
    };
};