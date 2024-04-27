import Button from '../common/Button.jsx';

/**
 * @param {[object]} todos
 * @param {function} onRemoveTodo
 * @param {function} onCompleteTodo
 * @returns {Element}
 * @constructor
 */
const TodoList = ({todos, onRemoveTodo, onCompleteTodo}) => {
    return (
        <div className="mt-4">
            { todos.map(todo => (
                <div key={ todo.id }>
                    <input
                        checked={todo.isCompleted}
                        onChange={(e) => onCompleteTodo(todo.id, e.target.checked)}
                        type="checkbox"/>
                    { todo.text }
                    <Button onClick={ () => onRemoveTodo(todo.id) }>x</Button>
                </div>
            )) }
        </div>
    );
};

export default TodoList;