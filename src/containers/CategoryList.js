import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Prev from '../components/CocktailPreview';
import CatFilter from '../components/CatFilter';
import { getCatList } from '../actions/categoryActions';
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
      return <h1>Loading...</h1>;
    }

    if (list.data && list.data.length === 0) {
      return <h1>No drinks found</h1>;
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
      return <h1>{list.errorMSG}</h1>;
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
