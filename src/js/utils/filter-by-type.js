
function filterByType(state, payload) {

    if(payload.length > 0) {
        return state.data.filter(record => record.type.toLowerCase().includes(payload));
    } else {
        return state.data;
    };
   
};

export default filterByType;
