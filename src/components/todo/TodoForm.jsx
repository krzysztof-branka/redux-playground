import { useState } from 'react';
import Button from '../common/Button.jsx';

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
            <Button className="ml-2">Add</Button>
        </form>
    );
};

export default TodoForm;