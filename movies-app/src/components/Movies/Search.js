import React, { useState } from "react";

function Search({ onSearch }) {
  const [query, setQuery] = useState("");

  function handleQuery(e) {
    e.preventDEfault();
    onSearch(query);
  }
  return (
    <nav>
      <input value={query} onChange={(e) => setQuery(e.target.value)}></input>
      <button type="submit" onClick={(e) => handleQuery(e)}>
        Search
      </button>
    </nav>
  );
}

export default Search;
