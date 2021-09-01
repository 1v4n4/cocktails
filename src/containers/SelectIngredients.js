import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import IngList from './IngList';
import { getRecipes } from '../actions/recipesActions';
import Prev from '../components/CocktailPreview';
import '../CSS/selectIng.css';

const SelectIngredients = () => {
  const [ingredient, setIngredient] = useState('');

  const dispatch = useDispatch();
  const list = useSelector((state) => state.recipes);

  const fetchRecipes = (ingredient) => {
    dispatch(getRecipes(ingredient));
  };

  useEffect(() => {
    fetchRecipes(ingredient);
  }, [ingredient]);

  const showData = () => {
    if (list.loading) {
      return <h1>...</h1>;
    }

    if (list.data && list.data.length === 0) {
      return <h1>No drinks found</h1>;
    }
    if (list.data && list.data.length > 0) {
      return (
        <div className="selection">
          <Prev list={list.data} />
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
      <IngList setIngredient={setIngredient} ingredient={ingredient} />
      <div id="four">
        {showData()}
      </div>
    </div>
  );
};

export default SelectIngredients;
