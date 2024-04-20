import { applyMiddleware, legacy_createStore } from 'redux';
import { reducers } from './reducers.js';
import { loggingMiddleware } from './baseRedux/middleware.js';



export const store = legacy_createStore(reducers, applyMiddleware(loggingMiddleware))