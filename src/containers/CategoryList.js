import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Prev from '../components/CocktailPreview';
import CatFilter from '../components/CatFilter';
import { getCatList } from '../actions';
import cat from '../assets/category.png';

const CategoryList = () => {
  const [category, setCategory] = useState('');
  const list = useSelector((state) => state.category);
  console.log('category component, list:', list);
  const dispatch = useDispatch();

  const fetchCategory = (category) => {
    console.log('in fetchCategory', category);
    dispatch(getCatList(category));
  };

  useEffect(() => {
    fetchCategory(category);
  }, [category]);

  const showData = () => {
    if (list.loading) {
      return <p className="loading-msg">Loading...</p>;
    }

    if (list.data && list.data.length === 0) {
      return <p className="nodrinks-msg">No drinks found</p>;
    }
    if (list.data && list.data.length > 0) {
      return (
        <div>
          <hr />
          <img src={cat} className="filter-logo" alt="filter-logo" />
          <Prev list={list.data} />
          <hr />
        </div>
      );
    }
    if (list.errorMSG !== '') {
      return <p className="show-data-msg">{list.errorMSG}</p>;
    }
    return <p />;
  };

  return (
    <div>

      <CatFilter setCategory={setCategory} category={category} />
      {showData()}
    </div>
  );
};

export default CategoryList;
