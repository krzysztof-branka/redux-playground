import { useState } from 'react';

/**
 * @param {function} onAddTodo
 * @returns {Element}
 * @constructor
 */
const TodoForm = ({onAddTodo}) => {
    const [text, setText] = useState("");

    const handleAddTodo = (e) => {
        e.preventDefault();
        onAddTodo({
            id: crypto.randomUUID(),
            text,
            isCompleted: false
        });
        setText("");
    }

    return (
        <form onSubmit={ handleAddTodo }>
            <input value={text} onChange={ (e) => setText(e.target.value) } type="text"/>
            <button>Add</button>
        </form>
    );
};

export default TodoForm;