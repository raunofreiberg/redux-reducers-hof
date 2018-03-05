export default (actionsMap, initialState) => (state = initialState, action) => {
    const reduceFn = actionsMap[action.type];

    if (!reduceFn) {
        return state;
    }

    return reduceFn(state, action);
}