import { put, select, takeEvery, takeLatest } from 'redux-saga/effects';
import { addTodoAction, completeTodoAction, loadTodosAction, removeTodoAction, showToastAction, todosLoadedAction } from './actions.js';
import { TODOS_REDUX_SAGA_KEY } from './constants.js';
import { toast } from 'react-toastify';

function* loadTodos() {
    const persistedTodos = yield localStorage.getItem(TODOS_REDUX_SAGA_KEY);
    const parsedTodos = yield JSON.parse(persistedTodos);

    yield put(todosLoadedAction(parsedTodos));
}

function* persistTodos() {
    const todos = yield select(state => state.todosActionsReducer);
    const serialized = yield JSON.stringify(todos);
    localStorage.setItem(TODOS_REDUX_SAGA_KEY, serialized);
}

function* handleCompletedTodo(action) {
    const { id, isCompleted } = yield action.payload;
    if (!isCompleted) return;

    const completedTodo = yield select(state => state.todosActionsReducer.find(todo => todo.id === id));

    if (completedTodo == null) return;

    yield put(showToastAction(`Task "${completedTodo.text}" completed!`));
}

function* handleShowToast(action) {
    yield toast(action.payload);
}

function* saga() {
    yield takeLatest(loadTodosAction().type, loadTodos);
    yield takeLatest([
        addTodoAction().type,
        removeTodoAction().type,
        completeTodoAction().type
    ], persistTodos);
    yield takeEvery(showToastAction().type, handleShowToast)
    yield takeEvery(completeTodoAction().type, handleCompletedTodo);
}

export default saga;