import { ToastActions, TodosActions } from './constants.js';

export const addTodo = (todo) => ({
    type: TodosActions.ADD_TODO,
    payload: todo
});

export const removeTodo = (todoId) => ({
    type: TodosActions.REMOVE_TODO,
    payload: {
        id: todoId
    }
});

export const completeTodo = (todoId, isCompleted) => ({
    type: TodosActions.COMPLETE_TODO,
    payload: {
        id: todoId,
        isCompleted
    }
});

export const loadTodos = () => ({
    type: TodosActions.LOAD_TODOS
});

export const todosLoaded = (todos) => ({
    type: TodosActions.TODOS_LOADED,
    payload: todos
});

// Toast action
export const showToast = (text) => ({
    type: ToastActions.SHOW_TOAST,
    payload: text
});