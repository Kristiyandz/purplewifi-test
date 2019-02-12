function deleteReport(state, index) {
    state.data.splice(index, 1);
    return state.data;
};

export default deleteReport;