import { useDispatch, useSelector } from 'react-redux';
import { getValue } from '../store/selector.js';

function Main() {

    const value = useSelector(getValue);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={ () => dispatch({ type: 'increment' }) }>+</button>
                <button onClick={ () => dispatch({ type: 'decrement' }) }>-</button>
                <p>
                    count is { value }
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </div>
    );
}

export default Main;