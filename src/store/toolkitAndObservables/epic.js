import { delay, filter, map } from 'rxjs/operators';

export const pongEpic = action$ => action$.pipe(
    filter(action => action.type === 'todos/addTodoToolkit'),
    delay(1000),
    map(() => ({ type: 'PONG' }))
);
