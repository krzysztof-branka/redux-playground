import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodoToolkit: (state, action) => {
            state.push({
                id: action.payload.id,
                text: action.payload.text,
                isCompleted: action.payload.isCompleted,
            });
        },
        removeTodoToolkit: (state, action) => {
            return state.filter((todo) => todo.id !== action.payload.id);
        },
        completeTodoToolkit: (state, action) => {
            return state.map((todo) => {
                if (todo.id === action.payload.id) {
                    todo.isCompleted = action.payload.isCompleted;
                }
                return todo;
            });
        },
    },
});

export const { addTodoToolkit, removeTodoToolkit, completeTodoToolkit } = todosSlice.actions;
export const toolkitTodosReducer = todosSlice.reducer;