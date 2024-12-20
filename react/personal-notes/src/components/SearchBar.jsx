/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

function SearchBar({ keyword, onSearch }) {
  return (
    <div className="note-search">
      <input
        type="text"
        placeholder="Cari catatan..."
        value={keyword}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
