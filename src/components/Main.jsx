import TodoViewReactCore from './coreReact/TodoViewReactCore.jsx';
import TodoViewReduxCore from './coreRedux/TodoViewReduxCore.jsx';
import { useDispatch } from 'react-redux';
import { loadTodos } from '../store/coreRedux/todosReducer.js';
import { useEffect, useState } from 'react';
import TodoSearch from './common/TodoSearch.jsx';
import TodoViewReduxActions from './reduxActions/TodoViewReduxActions.jsx';
import { loadTodosAction } from '../store/reduxActions/actions.js';

const Main = () => {
    const dispatch = useDispatch();
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        dispatch(loadTodos());
        dispatch(loadTodosAction());
    }, [dispatch]);

    return (
        <div>
            <h1>React Redux playground</h1>
            <TodoSearch searchText={searchText} onSearchTextChange={(e) => setSearchText(e.target.value)}/>
            <h2>Core React</h2>
            <TodoViewReactCore searchPhrase={searchText}/>
            <h2>Core Redux</h2>
            <TodoViewReduxCore searchPhrase={searchText}/>
            <h2>Redux Actions and Redux Saga</h2>
            <TodoViewReduxActions searchPhrase={searchText}/>
        </div>
    );
}

export default Main;