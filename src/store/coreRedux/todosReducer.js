import { TodosActions } from './constants.js';


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
