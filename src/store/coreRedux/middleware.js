import { ToastActions, TODOS_REDUX_CORE_KEY, TodosActions } from './constants.js';
import { showToast, todosLoaded } from './actionCreators.js';
import { getTodoById } from './selectors.js';
import { toast } from 'react-toastify';

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

export const showToastOnCompleteTodo = store => next => action => {
    next(action)

    if (action.type === TodosActions.COMPLETE_TODO && action.payload.isCompleted) {
        const completedTodo = getTodoById(store.getState(), action.payload.id);

        if (!completedTodo) return;

        store.dispatch(showToast(`Task "${completedTodo.text}" completed!`))
    }
}

export const showToasts = () => next => action => {
    next(action)

    if (action.type === ToastActions.SHOW_TOAST) {
        toast(action.payload)
    }
}