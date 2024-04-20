import React from 'react';
import TodoForm from '../common/TodoForm.jsx';
import TodoList from '../common/TodoList.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos } from '../../store/coreRedux/selectors.js';
import { addTodo, removeTodo } from '../../store/coreRedux/todosReducer.js';

const TodoViewReduxCore = () => {
    const todos = useSelector(getTodos);
    const dispatch = useDispatch();

    const onAddTodo = (todo) => {
        dispatch(addTodo(todo));
    }

    const onRemoveTodo = (id) => {
        dispatch(removeTodo(id))
    }

    return (
        <>
            <TodoForm onAddTodo={onAddTodo}/>
            <TodoList todos={todos} onRemoveTodo={onRemoveTodo}/>
        </>
    );
};

export default TodoViewReduxCore;