/**
 * @param {[object]} todos
 * @param {function} onRemoveTodo
 * @param {function} onCompleteTodo
 * @returns {Element}
 * @constructor
 */
const TodoList = ({todos, onRemoveTodo, onCompleteTodo}) => {
    return (
        <div>
            { todos.map(todo => (
                <div key={ todo.id }>
                    <input
                        checked={todo.isCompleted}
                        onChange={(e) => onCompleteTodo(todo.id, e.target.checked)}
                        type="checkbox"/>
                    { todo.text }
                    <button onClick={ () => onRemoveTodo(todo.id) }>x</button>
                </div>
            )) }
        </div>
    );
};

export default TodoList;