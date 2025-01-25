import React, { useState } from "react";

function SearchBar() {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    console.log("Search for:", query);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for skills..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
