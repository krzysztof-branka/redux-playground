import * as todoEpics from './toolkitAndObservables/epic.js';
import { combineEpics } from 'redux-observable';

export const rootEpic = combineEpics(
    todoEpics
);
