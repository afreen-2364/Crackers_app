import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value); // Trigger the search handler passed as a prop
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
