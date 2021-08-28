import React from 'react';
import PropTypes from 'prop-types';
// import { useDispatch } from 'react-redux';
// import { getSearch } from '../actions';
import '../CSS/search.css';

const Search = ({ setSearch, fetchSearch }) => (
  <form className="search-form">
    <h2 className="search-txt">There are hundreds of recipes! Browse cocktails by name or ingredients</h2>
    <input type="text" placeholder="Type here" onChange={(e) => setSearch(e.target.value)} />
    <br />
    <button className="search-btn" type="button" onClick={() => fetchSearch()}>SEARCH</button>
  </form>
);

Search.propTypes = {
  setSearch: PropTypes.func.isRequired,
  fetchSearch: PropTypes.func.isRequired,
};
export default Search;
