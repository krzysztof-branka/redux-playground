import { combineReducers } from 'redux';

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
const counterReducer = (state, action) => {

    if (action.type === 'increment') {
        return { value: state.value + 1 };
    }

    if (action.type === 'decrement') {
        return { value: state.value - 1 };
    }

    return { value: 0 };
};

/**
 * @typedef {Object} RootState
 * @property {CounterState} counterReducer - The state tree for the counter
 */

/**
 * Root reducer combining all reducers of the application.
 * @type {RootState}
 */
export const reducers = combineReducers({ counterReducer });

