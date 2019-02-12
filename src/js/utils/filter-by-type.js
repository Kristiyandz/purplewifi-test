
function filterByType(state, payload) {

    if(payload.length > 0) {
        return state.data.filter(record => record.type.includes(payload));
    } else {
        console.log(state);
        return state.data;
    }
   
};

export default filterByType;
