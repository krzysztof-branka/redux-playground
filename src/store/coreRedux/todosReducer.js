import { TodosActions } from './constants.js';

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

export const todosReducer = (state = [], action) => {

    if (action.type === TodosActions.ADD_TODO) {
        return [...state, action.payload];
    }

    if (action.type === TodosActions.REMOVE_TODO) {
        return state.filter(todo => todo.id !== action.payload.id);
    }

    if (action.type === TodosActions.COMPLETE_TODO) {
        return state.map(todo => {
            if (todo.id !== action.payload.id) {
                return todo;
            }

            return {
                ...todo,
                isCompleted: action.payload.isCompleted
            }
        })
    }

    if (action.type === TodosActions.TODOS_LOADED) {
        return action.payload;
    }

    return state;
};
