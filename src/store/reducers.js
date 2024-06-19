import { combineReducers } from 'redux';
import { todosReducer } from './coreRedux/todosReducer.js';
import { todosActionsReducer } from './reduxActions/reducer.js';
import { toolkitTodosReducer } from './toolkitAndObservables/reducer.js';

/**
 * @typedef {Object} RootState
 * @property todosReducer - Core redux todos reducer
 * @property todosActionsReducer - Redux actions todos reducer
 */

/**
 * Root reducer combining all reducers of the application.
 * @type {RootState}
 */
export const reducers = combineReducers({ todosReducer, todosActionsReducer, toolkitTodosReducer });