import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CatFilter from '../components/CatFilter';
import { getCatList } from '../actions';

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
          {list.data.map((item) => (
            <Link to={`/cocktail/${item.strDrink}`} key={item.idDrink}>{item.strDrink}</Link>
          ))}

        </div>

      );
    }
    if (list.errorMSG !== '') {
      return <p className="show-data-msg">{list.errorMSG}</p>;
    }
    return <p className="show-data-msg">Yikes! No data</p>;
  };

  return (
    <div>

      <CatFilter setCategory={setCategory} />
      {showData()}
    </div>
  );
};

export default CategoryList;
