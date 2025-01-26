import React, { useState, useEffect } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState(""); // State for input field
  const [debouncedQuery, setDebouncedQuery] = useState(query);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query); // Update the debounced query after 500ms
    }, 500);

    // Clean up the timeout if the component is unmounted or query changes
    return () => clearTimeout(handler);
  }, [query]);

  useEffect(() => {
    onSearch(debouncedQuery); // Trigger the search with the debounced query
  }, [debouncedQuery, onSearch]);

  const handleInputChange = (e) => {
    setQuery(e.target.value); // Update local query state on input change
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for skills..."
        value={query}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default SearchBar;
