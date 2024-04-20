import React from 'react';

/**
 * @param {[object]} todos
 * @param {function} onRemoveTodo
 * @returns {Element}
 * @constructor
 */
const TodoList = ({todos, onRemoveTodo}) => {
    return (
        <div>
            { todos.map(todo => (
                <div key={ todo.id }>
                    { todo.text }
                    <button onClick={ () => onRemoveTodo(todo.id) }>x</button>
                </div>
            )) }
        </div>
    );
};

export default TodoList;