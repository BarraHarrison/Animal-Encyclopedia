import React from 'react';

function SearchBar({ searchTerm, setSearchTerm }) {
    return (
        <input
            type="text"
            placeholder="Search animals..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
    );
}

export default SearchBar;
