import { memo, useEffect, useState } from 'react';
import TodoForm from '../../components/todo/TodoForm.jsx';
import TodoList from '../../components/todo/TodoList.jsx';
import { getPersistedTodos, persistTodos } from './persist.js';
import { toast } from 'react-toastify';

const TodoViewReactCore = memo(({searchPhrase}) => {
    const [todos, setTodos] = useState(getPersistedTodos);
    const searchedTodos = todos.filter(todo => {
        return todo.text.toLowerCase().includes(searchPhrase.toLowerCase())
    })

    const onAddTodo = (todo) => {
        setTodos(prevTodos => [...prevTodos, todo], );
    }

    const onRemoveTodo = (id) => {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
    }

    const onCompleteTodo = (todoId, isCompleted) => {
        const todoToComplete = todos.find(todo => todo.id === todoId);
        setTodos(prevTodos => prevTodos.map(todo => {
            if (todo.id !== todoId) {
                return todo;
            }

            return {
                ...todo,
                isCompleted
            }
        }));

        if (isCompleted) {
            toast(`Task "${todoToComplete.text}" completed!`)
        }
    }

    useEffect(() => {
        persistTodos(todos);
    }, [todos]);

    return (
        <>
            <TodoForm onAddTodo={onAddTodo}/>
            <TodoList todos={searchedTodos} onRemoveTodo={onRemoveTodo} onCompleteTodo={onCompleteTodo}/>
        </>
    );
});

TodoViewReactCore.displayName = "TodoViewReactCoreMemoized"

export default TodoViewReactCore;