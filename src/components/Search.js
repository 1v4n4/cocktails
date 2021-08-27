import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getSearch } from '../actions';

const Search = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  return (
    <form className="searchForm">
      <h4>Search by name or ingredients</h4>
      <input type="text" placeholder="Type here" onChange={(e) => setSearch(e.target.value)} />
      <p>{search}</p>
      <button type="button" onClick={() => dispatch(getSearch(search))}>Search</button>
    </form>
  );
};

export default Search;
