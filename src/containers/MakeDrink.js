import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getIng } from '../actions/ingredientsActions';

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
      return <h1>Loading...</h1>;
    }

    if (list && list.length === 0) {
      return <h1>Yikes! Something went wrong</h1>;
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
      return <h1>{list.errorMSG}</h1>;
    }
    return <p />;
  };

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
