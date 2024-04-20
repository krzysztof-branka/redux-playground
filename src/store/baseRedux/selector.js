/**
 * @param {RootState} state - Current state of the application.
 */
export const getValue = (state) => {
    return state.counterReducer.value;
}