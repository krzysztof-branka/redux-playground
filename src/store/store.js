import { applyMiddleware, compose, legacy_createStore } from 'redux';
import { reducers } from './reducers.js';
import { loadPersistedTodos, loggingMiddleware, persistTodos } from './coreRedux/middleware.js';
import createSagaMiddleware from 'redux-saga'
import saga from './reduxActions/saga.js';

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsDenylist, actionsCreators, serialize...
        })
        : compose;

const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware, loggingMiddleware, loadPersistedTodos, persistTodos),
);
export const store = legacy_createStore(reducers, enhancer);

sagaMiddleware.run(saga)
