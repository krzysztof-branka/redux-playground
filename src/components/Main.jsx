import ReduxCounter from './ReduxCounter.jsx';
import ReduxActionsCounter from './ReduxActionsCounter.jsx';
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
            <h1>React playground</h1>
            <ReduxCounter/>
            <TodoSearch searchText={searchText} onSearchTextChange={(e) => setSearchText(e.target.value)}/>
            <ReduxActionsCounter/>
            <TodoViewReactCore searchPhrase={searchText}/>
            <TodoViewReduxCore searchPhrase={searchText}/>
            <TodoViewReduxActions searchPhrase={searchText}/>
        </div>
    );
}

export default Main;