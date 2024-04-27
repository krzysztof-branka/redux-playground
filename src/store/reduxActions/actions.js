import { createAction } from 'redux-actions';

export const addTodoAction = createAction('ADD_TODO_ACTION');
export const removeTodoAction = createAction('REMOVE_TODO_ACTION');
export const completeTodoAction = createAction('COMPLETE_TODO_ACTION');
export const loadTodosAction = createAction('LOAD_TODOS_ACTION');
export const todosLoadedAction = createAction('TODOS_LOADED_ACTION');