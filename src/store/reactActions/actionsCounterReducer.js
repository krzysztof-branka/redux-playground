import { handleActions } from 'redux-actions';
import { decrement, increment } from './actionsCounterActions.js';

const defaultState = { counter: 0 };

const handleIncrement = (state) =>
    ({
        ...state,
        counter: state.counter + 1
    });

const handleDecrement = (state) =>
    ({
        ...state,
        counter: state.counter - 1
    });

export const actionsCounterReducer = handleActions({
        [ increment ]: handleIncrement,
        [ decrement ]: handleDecrement
    },
    defaultState
);