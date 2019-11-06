import React, { useState } from "react";

export default function SearchForm({ fetchArtists }) {
  const [query, setQuery] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetchArtists(query);
  }

  return (
    <form className="mb-10 flex" onSubmit={handleSubmit}>
      <input
        type="text"
        className="p-2 mr-2 rounded shadow-lg w-full"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <button className="bg-blue-600 text-blue-100 py-2 px-8 rounded shadow-lg">
        Search
      </button>
    </form>
  );
}
