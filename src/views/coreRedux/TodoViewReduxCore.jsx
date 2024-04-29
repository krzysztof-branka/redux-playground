import TodoForm from '../../components/todo/TodoForm.jsx';
import TodoList from '../../components/todo/TodoList.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { searchTodosByText } from '../../store/coreRedux/selectors.js';
import { addTodo, completeTodo, removeTodo } from '../../store/coreRedux/actionCreators.js';

const TodoViewReduxCore = ({searchPhrase: searchPhrase}) => {
    const todos = useSelector((state) => searchTodosByText(state, searchPhrase));
    const dispatch = useDispatch();

    const onAddTodo = (todo) => {
        dispatch(addTodo(todo));
    }

    const onRemoveTodo = (id) => {
        dispatch(removeTodo(id))
    }

    const onCompleteTodo = (id, isCompleted) => {
        dispatch(completeTodo(id, isCompleted))
    }

    return (
        <>
            <TodoForm onAddTodo={onAddTodo}/>
            <TodoList todos={todos} onRemoveTodo={onRemoveTodo} onCompleteTodo={onCompleteTodo}/>
        </>
    );
};

export default TodoViewReduxCore;