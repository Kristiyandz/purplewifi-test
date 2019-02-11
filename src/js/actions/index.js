import { 
    SORT_ASCENDING,
    SORT_DESCENDING,
    FILTER_BY_TYPE,
    DELETE,
    ADD_REPORT
 } from '../constants/action-types';


 export function sortAscendingAction(){
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

export function filterByTypeAction(){
    return function(dispatch) {
        dispatch({
            type: FILTER_BY_TYPE,
            payload: {}
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