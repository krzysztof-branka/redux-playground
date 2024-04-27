import { TODOS_REDUX_CORE_KEY, TodosActions } from './constants.js';
import { todosLoaded } from './todosReducer.js';

export const loggingMiddleware = () => next => action => {
    console.log(action);
    next(action);
}

export const loadPersistedTodos = store => next => action => {
    if (action.type === TodosActions.LOAD_TODOS) {
        const persistedTodos = localStorage.getItem(TODOS_REDUX_CORE_KEY);

        if (persistedTodos == null || persistedTodos === "") {
            return next(action);
        }

        try {
            const parsedTodos = JSON.parse(persistedTodos);
            store.dispatch(todosLoaded(parsedTodos));
        } catch (e) {
            return next(action);
        }
    }

    next(action);
}

export const persistTodos = store => next => action => {
    if (
        action.type === TodosActions.ADD_TODO
        || action.type === TodosActions.REMOVE_TODO
        || action.type === TodosActions.COMPLETE_TODO
    ) {
        next(action);

        const todosSerialized = JSON.stringify(store.getState().todosReducer);
        localStorage.setItem(TODOS_REDUX_CORE_KEY, todosSerialized);
        return;
    }

    next(action)
}