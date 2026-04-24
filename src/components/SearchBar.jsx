const SearchBar = ({ searchQuery, onSearch }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        id="searchInput"
        placeholder="Search any concept, service, or keyword..."
        value={searchQuery}
        onChange={(e) => onSearch(e.target.value)}
      />
      {searchQuery && (
        <button
          className="search-clear"
          onClick={() => onSearch('')}
          aria-label="Clear search"
          title="Clear search"
        >
          ✕
        </button>
      )}
    </div>
  );
};

export default SearchBar;
