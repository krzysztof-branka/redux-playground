import { applyMiddleware, legacy_createStore } from 'redux';
import { reducers } from './reducers.js';
import { loggingMiddleware } from './middleware.js';

export const store = legacy_createStore(reducers, applyMiddleware(loggingMiddleware))