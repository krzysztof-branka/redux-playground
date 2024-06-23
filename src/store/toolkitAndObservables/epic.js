import { map, withLatestFrom } from 'rxjs/operators';
import { TODOS_REDUX_OBSERVABLES_KEY } from './constants.js';
import { ofType } from 'redux-observable';
import { toast } from 'react-toastify';

export const loadTodosEpic = action$ => action$.pipe(
    ofType('todos/loadTodosToolkit'),
    map(() => {
            const persistedTodos = localStorage.getItem(TODOS_REDUX_OBSERVABLES_KEY);
            const parsedTodos = JSON.parse(persistedTodos);
            return ({
                type: 'todos/todosLoaded',
                payload: parsedTodos ?? []
            });
        }
    )
);

export const persistTodosEpic = (action$, state$) =>
    action$.pipe(
        ofType('todos/addTodoToolkit', 'todos/removeTodoToolkit', 'todos/completeTodoToolkit'),
        withLatestFrom(state$),
        map(([, state]) => {
            const todos = state.toolkitTodosReducer;
            localStorage.setItem(TODOS_REDUX_OBSERVABLES_KEY, JSON.stringify(todos));

            return { type: 'NO_OP' };
        })
    );


export const showToastEpic = (action$) =>
    action$.pipe(
        ofType('todos/showToast'),
        map((action) => {
            toast(action.payload);
            return { type: 'NO_OP' };
        })
    );


export const handleCompleteTodo = (action$, state$) =>
    action$.pipe(
        ofType('todos/completeTodoToolkit'),
        withLatestFrom(state$),
        map(([action, state]) => {
            if (!action.payload.isCompleted) {
                return { type: 'NO_OP' };
            }
            const todo = state.toolkitTodosReducer.find(todo => todo.id === action.payload.id);
            if (!todo) {
                return { type: 'NO_OP' };
            }
            return {
                type: 'todos/showToast',
                payload: `Task "${todo.text}" completed!`
            };
        })
    );