import { takeLatest, put, select } from 'redux-saga/effects'
import { addTodoAction, completeTodoAction, loadTodosAction, removeTodoAction, todosLoadedAction } from './actions.js';
import { TODOS_REDUX_SAGA_KEY } from './constants.js';

function* loadTodos() {
    const persistedTodos = yield localStorage.getItem(TODOS_REDUX_SAGA_KEY);
    const parsedTodos = yield JSON.parse(persistedTodos);

    yield put(todosLoadedAction(parsedTodos))
}

function* persistTodos(){
    const todos = yield select(state => state.todosActionsReducer);
    const serialized = yield JSON.stringify(todos);
    localStorage.setItem(TODOS_REDUX_SAGA_KEY, serialized);
}

function* saga(){
    yield takeLatest(loadTodosAction().type, loadTodos);
    yield takeLatest([
        addTodoAction().type,
        removeTodoAction().type,
        completeTodoAction().type
    ], persistTodos)
}

export default saga;