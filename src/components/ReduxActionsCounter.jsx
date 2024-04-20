import { useDispatch, useSelector } from 'react-redux';
import { getActionsCounter } from '../store/reactActions/selector.js';
import { decrement, increment } from '../store/reactActions/actionsCounterActions.js';

const ReduxActionsCounter = () => {
    const value = useSelector(getActionsCounter);
    const dispatch = useDispatch();

    return (
        <div className="card">
            <button onClick={ () => dispatch(increment()) }>+</button>
            <button onClick={ () => dispatch(decrement()) }>-</button>
            <p>
                count is { value }
            </p>
        </div>
    );
};

export default ReduxActionsCounter;