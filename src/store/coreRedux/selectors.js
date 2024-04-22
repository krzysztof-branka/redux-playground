import { createSelector } from 'reselect';

export const getTodos = (state) => {
    return state.todosReducer;
}

export const searchTodosByText = createSelector(
    [
        getTodos,
        (_, searchedText) => searchedText
    ],
    (todos, searchedText) => todos.filter(todo => {
        return todo.text.toLowerCase().includes(searchedText.toLowerCase())
    })
)