import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { getIng } from '../actions/ingredientsActions';
import '../CSS/selectIng.css';

const IngList = ({ ingredient, setIngredient }) => {
  const dispatch = useDispatch();
  const listObjects = useSelector((state) => state.ingredients.data);
  const loading = useSelector((state) => state.ingredients.loading);

  const list = listObjects.map((item) => item.strIngredient1);

  const FetchIng = () => {
    dispatch(getIng());
  };

  useEffect(() => {
    FetchIng();
  }, []);

  const handleClick = (item) => {
    setIngredient(item);
    setTimeout(() => {
      window.location.href = '#four';
    }, 300);
  };

  const showData = () => {
    if (loading) {
      return <h1 style={{ marginTop: '25vh' }}>Loading</h1>;
    }

    if (list && list.length > 0) {
      return (
        <div className="ing-btn-div">
          {list.map((item) => (
            <button className={`ing-btn${ingredient === item ? '-selected' : ''}`} type="button" key={item} onClick={() => handleClick(item)}>{item}</button>
          ))}

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

      {showData()}

    </div>
  );
};

IngList.propTypes = {
  setIngredient: PropTypes.func.isRequired,
  ingredient: PropTypes.string.isRequired,
};

export default IngList;
