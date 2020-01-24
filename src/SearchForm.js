import React, { useState } from "react";
// export default function SearchForm({ fetchArtists , fetchTracks })
export default function SearchForm({ fetchArtists }) {
  const [query, setQuery, id] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetchArtists(query);
    // fetchTracks(id);
  }

  

  return (
    <form style={{padding: 24}} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search Artist"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <button>
        Search
      </button>
    </form>
  );
}
