const TODOS_REACT_CORE_KEY = "todos-react-core";

export const getPersistedTodos = () => {
    const persistedTodos = localStorage.getItem(TODOS_REACT_CORE_KEY);

    if (persistedTodos == null || persistedTodos === "") return [];

    try {
        return JSON.parse(persistedTodos);
    } catch (e) {
        return [];
    }
}

export const persistTodos = (todos) => {
    localStorage.setItem(TODOS_REACT_CORE_KEY, JSON.stringify(todos));
}
