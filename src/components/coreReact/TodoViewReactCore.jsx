import React, { useEffect, useState } from 'react';
import TodoForm from '../common/TodoForm.jsx';
import TodoList from '../common/TodoList.jsx';
import { getPersistedTodos, persistTodos } from './persist.js';

const TodoViewReactCore = () => {
    const [todos, setTodos] = useState(getPersistedTodos);

    const onAddTodo = (todo) => {
        setTodos(prevTodos => [...prevTodos, todo], )
    }

    const onRemoveTodo = (id) => {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))
    }

    useEffect(() => {
        persistTodos(todos);
    }, [todos]);

    return (
        <>
            <TodoForm onAddTodo={onAddTodo}/>
            <TodoList todos={todos} onRemoveTodo={onRemoveTodo}/>
        </>
    );
};

export default TodoViewReactCore;