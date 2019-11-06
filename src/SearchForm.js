import React, { useState } from "react";

export default function SearchForm({ fetchArtists }) {
  const [query, setQuery] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetchArtists(query);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <button>
        Search
      </button>
    </form>
  );
}
