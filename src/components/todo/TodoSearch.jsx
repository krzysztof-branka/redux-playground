function TodoSearch({searchText, onSearchTextChange}) {
    return (
        <div>
            <h2>Search for a task</h2>
            <input className="rounded mt-2" type="text" value={searchText} onChange={onSearchTextChange}/>
        </div>
    );
}

export default TodoSearch;