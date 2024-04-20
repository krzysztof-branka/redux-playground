/**
 * @typedef {Object} CounterState
 * @property {number} value - the current counter value
 */

/**
 * Counter reducer to manage counter actions.
 * @function
 * @name counterReducer
 * @param {CounterState} state - Current state of the counter.
 * @param {Object} action - The action to be performed.
 * @returns {CounterState} The new state of the counter.
 */
export const counterReducer = (state, action) => {

    if (action.type === 'increment') {
        return { value: state.value + 1 };
    }

    if (action.type === 'decrement') {
        return { value: state.value - 1 };
    }

    return { value: 0 };
};
