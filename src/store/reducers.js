import { combineReducers } from 'redux';
import { counterReducer } from './baseRedux/counterReducer.js';
import { actionsCounterReducer } from './reactActions/actionsCounterReducer.js';

/**
 * @typedef {Object} RootState
 * @property {CounterState} counterReducer - The state tree for the counter
 * @property actionsCounterReducer - The state tree for the counter
 */

/**
 * Root reducer combining all reducers of the application.
 * @type {RootState}
 */
export const reducers = combineReducers({ counterReducer, actionsCounterReducer });