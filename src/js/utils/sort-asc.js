function sortAsc(state, actionType) {
    console.log(state);
    return state.data.sort((a, b) => {
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
    })

};

export default sortAsc;