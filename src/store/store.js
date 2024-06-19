import { applyMiddleware, compose, legacy_createStore } from 'redux';
import { reducers } from './reducers.js';
import { loadPersistedTodos, loggingMiddleware, persistTodos, showToastOnCompleteTodo, showToasts } from './coreRedux/middleware.js';
import createSagaMiddleware from 'redux-saga'
import saga from './reduxActions/saga.js';
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic } from './epics.js';
import { pongEpic } from './toolkitAndObservables/epic.js';

const sagaMiddleware = createSagaMiddleware()
const epicMiddleware = createEpicMiddleware();

const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsDenylist, actionsCreators, serialize...
        })
        : compose;

const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware, epicMiddleware, loggingMiddleware, loadPersistedTodos, persistTodos, showToastOnCompleteTodo, showToasts),
);
export const store = legacy_createStore(reducers, enhancer);

sagaMiddleware.run(saga)
epicMiddleware.run(pongEpic)
