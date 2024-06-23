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
                    return {
                        ...todo,
                        isCompleted: action.payload.isCompleted,
                    };
                }
                return todo;
            });
        },
        loadTodosToolkit: (state) => state,
        todosLoaded: (state, action) => action.payload,
        showToast: (state) => state,
    },
});

export const {
    addTodoToolkit,
    removeTodoToolkit,
    completeTodoToolkit,
    loadTodosToolkit,
    todosLoaded,
    showToast
} = todosSlice.actions;
export const toolkitTodosReducer = todosSlice.reducer;