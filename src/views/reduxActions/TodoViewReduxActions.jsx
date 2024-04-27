import TodoForm from '../../components/todo/TodoForm.jsx';
import TodoList from '../../components/todo/TodoList.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { addTodoAction, completeTodoAction, removeTodoAction } from '../../store/reduxActions/actions.js';
import { searchActionTodosByText } from '../../store/reduxActions/selectors.js';

const TodoViewReduxActions = ({searchPhrase: searchPhrase}) => {
    const todos = useSelector((state) => searchActionTodosByText(state, searchPhrase));
    const dispatch = useDispatch();

    const onAddTodo = (todo) => {
        dispatch(addTodoAction(todo));
    }

    const onRemoveTodo = (id) => {
        dispatch(removeTodoAction({id}))
    }

    const onCompleteTodo = (id, isCompleted) => {
        dispatch(completeTodoAction({id, isCompleted}))
    }

    return (
        <>
            <TodoForm onAddTodo={onAddTodo}/>
            <TodoList todos={todos} onRemoveTodo={onRemoveTodo} onCompleteTodo={onCompleteTodo}/>
        </>
    );
};

export default TodoViewReduxActions;