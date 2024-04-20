/**
 * @param {RootState} state - Current state of the application.
 */
export const getActionsCounter = (state) => {
    return state.actionsCounterReducer.counter;
}