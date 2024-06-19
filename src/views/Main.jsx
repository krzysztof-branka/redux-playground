import TodoViewReactCore from './coreReact/TodoViewReactCore.jsx';
import TodoViewReduxCore from './coreRedux/TodoViewReduxCore.jsx';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import TodoSearch from '../components/todo/TodoSearch.jsx';
import TodoViewReduxActions from './reduxActions/TodoViewReduxActions.jsx';
import { loadTodosAction } from '../store/reduxActions/actions.js';
import 'react-toastify/dist/ReactToastify.css';
import ToastsPortal from '../components/common/ToastsPortal.jsx';
import { loadTodos } from '../store/coreRedux/actionCreators.js';
import TodoViewToolkitAndObservables from './toolkitAndObservables/TodoViewToolkitAndObservables.jsx';

const Main = () => {
    const dispatch = useDispatch();
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        dispatch(loadTodos());
        dispatch(loadTodosAction());
    }, [dispatch]);

    return (
        <div className="container mx-auto my-4">
            <h1 className="text-4xl text-center">React Redux playground</h1>
            <TodoSearch searchText={searchText} onSearchTextChange={(e) => setSearchText(e.target.value)}/>
            <div className="flex gap-4 mt-8">
                <div className="w-1/3">
                    <h2 className="text-2xl">Core React</h2>
                    <TodoViewReactCore searchPhrase={searchText}/>
                </div>
                <div className="w-1/3">
                    <h2 className="text-2xl">Core Redux</h2>
                    <TodoViewReduxCore searchPhrase={ searchText }/>
                </div>
                <div className="w-1/3">
                    <h2 className="text-2xl">Redux Actions and Redux Saga</h2>
                    <TodoViewReduxActions searchPhrase={ searchText }/>
                </div>
                <div className="w-1/3">
                    <h2 className="text-2xl">Redux Toolkit</h2>
                    <TodoViewToolkitAndObservables searchPhrase={ searchText }/>
                </div>
            </div>
            <ToastsPortal/>
        </div>
    );
}

export default Main;