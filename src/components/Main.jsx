import ReduxCounter from './ReduxCounter.jsx';
import ReduxActionsCounter from './ReduxActionsCounter.jsx';
import TodoViewReactCore from './coreReact/TodoViewReactCore.jsx';
import TodoViewReduxCore from './coreRedux/TodoViewReactCore.jsx';
import { useDispatch } from 'react-redux';
import { loadTodos } from '../store/coreRedux/todosReducer.js';
import { useEffect } from 'react';

const Main = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadTodos());
    }, []);

    return (
        <div>
            <h1>React playground</h1>
            <ReduxCounter/>
            <ReduxActionsCounter/>
            <TodoViewReactCore/>
            <TodoViewReduxCore/>
        </div>
    );
}

export default Main;