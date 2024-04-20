import { useDispatch, useSelector } from 'react-redux';
import { getValue } from '../store/selector.js';

const ReduxCounter = () => {
    const value = useSelector(getValue);
    const dispatch = useDispatch();

    return (
        <div className="card">
            <button onClick={ () => dispatch({ type: 'increment' }) }>+</button>
            <button onClick={ () => dispatch({ type: 'decrement' }) }>-</button>
            <p>
                count is { value }
            </p>
        </div>
    );
};

export default ReduxCounter;