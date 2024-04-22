function TodoSearch({searchText, onSearchTextChange}) {
    return (
        <div>
            <h2>Search for a task</h2>
            <input type="text" value={searchText} onChange={onSearchTextChange}/>
        </div>
    );
}

export default TodoSearch;