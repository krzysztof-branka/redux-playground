export const loggingMiddleware = () => next => action => {
    console.log(action);
    next(action);
}