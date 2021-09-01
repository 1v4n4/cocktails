import React from 'react';
import PropTypes from 'prop-types';
import '../CSS/search.css';

const Search = ({ setSearch, fetchSearch }) => {
  const handleClick = () => {
    fetchSearch();
    setTimeout(() => {
      window.location.href = '#two';
    }, 300);
  };

  return (
    <form className="search-form">
      <h2 className="search-txt">
        There are hundreds of recipes, all the cocktails you have
        ever wanted to try!
        <br />
        Browse by name or ingredients
      </h2>
      <input type="text" placeholder="Type here" onChange={(e) => setSearch(e.target.value)} />
      <br />
      <button className="search-btn" type="button" onClick={() => handleClick()}>SEARCH</button>
      <div id="two" />
    </form>
  );
};

Search.propTypes = {
  setSearch: PropTypes.func.isRequired,
  fetchSearch: PropTypes.func.isRequired,
};
export default Search;
