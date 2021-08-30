import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Prev from '../components/CocktailPreview';
import Search from '../components/Search';
import { getSearch } from '../actions/searchActions';
import searchs from '../assets/search.png';
import img1 from '../assets/img1.jpg';
import '../CSS/searchList.css';

const SearchList = () => {
  const list = useSelector((state) => state.searched);

  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  const fetchSearch = () => {
    dispatch(getSearch(search));
  };

  const showData = () => {
    if (list.loading) {
      return <h1>Loading...</h1>;
    }

    if (list.data && list.data.length === 0) {
      return <h1>No drinks found</h1>;
    }
    if (list.data && list.data.length > 0) {
      return (
        <div>
          <hr />
          <img src={searchs} className="filter-logo" alt="filter-logo" />
          <Prev list={list.data} />
          <hr />
        </div>
      );
    }

    if (list.errorMSG !== '') {
      return <h1>{list.errorMSG}</h1>;
    }
    return <p />;
  };

  return (
    <>
      <div className="search-div">
        <Search setSearch={setSearch} fetchSearch={fetchSearch} />
        <img src={img1} className="img1" alt="cocktail" />
      </div>
      <div id="three">
        {showData()}
      </div>
    </>
  );
};

export default SearchList;
