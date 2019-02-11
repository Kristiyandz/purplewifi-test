
function filterByType(state, payload) {
    console.log(payload,'PAYLOAD');
    if(payload === '') {
        console.log('EMPTYYYY');
        return state.data
    }
    return state.data.filter(item => {
        if(item.type.includes(payload)) {
            return item;
        };
    })
};

export default filterByType;
