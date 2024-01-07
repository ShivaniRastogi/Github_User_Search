import React, { useState } from 'react';
import './us.css';

const Search = (props) => {
    const {setSearchInput,searchInput, handleSearch} = props;


  return (
    <>
      <h1>Github User Search</h1>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </>
  );
};

export default Search;
