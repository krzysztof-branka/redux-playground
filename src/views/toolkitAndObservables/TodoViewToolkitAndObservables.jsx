import TodoForm from '../../components/todo/TodoForm.jsx';
import TodoList from '../../components/todo/TodoList.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { addTodoToolkit, completeTodoToolkit, removeTodoToolkit } from '../../store/toolkitAndObservables/reducer.js';
import { searchToolkitTodosByText } from '../../store/toolkitAndObservables/selectors.js';

const TodoViewToolkitAndObservables = ({searchPhrase: searchPhrase}) => {
    const todos = useSelector((state) => searchToolkitTodosByText(state, searchPhrase));
    const dispatch = useDispatch();

    const onAddTodo = (todo) => {
        dispatch(addTodoToolkit(todo));
    }

    const onRemoveTodo = (id) => {
        dispatch(removeTodoToolkit({id}))
    }

    const onCompleteTodo = (id, isCompleted) => {
        dispatch(completeTodoToolkit({id, isCompleted}))
    }

    return (
        <>
            <TodoForm onAddTodo={onAddTodo}/>
            <TodoList todos={todos} onRemoveTodo={onRemoveTodo} onCompleteTodo={onCompleteTodo}/>
        </>
    );
};

export default TodoViewToolkitAndObservables;