import { handleActions } from 'redux-actions';
import { addTodoAction, completeTodoAction, removeTodoAction, todosLoadedAction } from './actions.js';

const handleAddTodo = (state, action) => {
    return [...state, action.payload];
}

const handleRemoveTodo = (state, action) => {
    return state.filter(todo => todo.id !== action.payload.id);
};

const handleCompleteTodo = (state, action) => {
    return state.map(todo => {
        if (todo.id !== action.payload.id) {
            return todo;
        }

        return {
            ...todo,
            isCompleted: action.payload.isCompleted
        }
    })
};

const handleTodosLoaded = (state, action) => {
    return action.payload;
}

export const todosActionsReducer = handleActions(
    {
        [addTodoAction]: handleAddTodo,
        [removeTodoAction]: handleRemoveTodo,
        [completeTodoAction]: handleCompleteTodo,
        [todosLoadedAction]: handleTodosLoaded
    },
    []
);