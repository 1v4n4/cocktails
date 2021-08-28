import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getIng } from '../actions';

const MakeDrink = () => {
  const dispatch = useDispatch();
  const listObjects = useSelector((state) => state.ingredients.data);

  const list = listObjects.map((item) => item.strIngredient1);

  const FetchIng = () => {
    dispatch(getIng());
  };

  useEffect(() => {
    FetchIng();
  }, []);

  const showData = () => {
    if (list.loading) {
      return <p className="loading-msg">Loading...</p>;
    }

    if (list && list.length === 0) {
      return <p className="nodrinks-msg">Yikes! Something went wrong</p>;
    }
    if (list && list.length > 0) {
      return (
        <div>
          {list.map((item) => (
            <button type="button" key={item}>{item}</button>
          ))}

        </div>

      );
    }
    if (list.errorMSG !== '') {
      return <p className="show-data-msg">{list.errorMSG}</p>;
    }
    return <p className="show-data-msg">Yikes! No data</p>;
  };

  console.log('ing list', list, listObjects);
  return (
    <div>
      <p>MakeDrink</p>
      <p>
        oj
        {showData()}
      </p>
    </div>
  );
};

export default MakeDrink;
