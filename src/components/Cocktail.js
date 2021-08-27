import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCocktail } from '../actions';

const Cocktail = (props) => {
  // eslint-disable-next-line
  const name = props.match.params.cocktail;

  const cocktail = useSelector((state) => state.cocktail.data);

  const dispatch = useDispatch();

  const fetchCocktail = (name) => {
    console.log('in fetchCocktail');
    dispatch(getCocktail(name));
  };

  useEffect(() => {
    fetchCocktail(name);
  }, [name]);

  console.log('koktell', cocktail);
  console.log('x', Object.values(cocktail)[0]);

  const ingredients = Object.keys(cocktail)
    .filter((key) => key.match(/ingredient/i))
    .filter((key) => !!cocktail[key] || cocktail[key] === ' ')
    .map((key) => cocktail[key].trim());

  const measures = Object.keys(cocktail)
    .filter((key) => key.match(/strMeasure/i))
    .filter((key) => !!cocktail[key] || cocktail[key] === ' ')
    .map((key) => cocktail[key].trim());

  console.log('ing', ingredients);
  console.log('mes', measures);

  return (
    <div>
      <h1>{name}</h1>
      <h3>
        Category:
        {cocktail.strCategory}
      </h3>
      <h3>
        Alcoholic:
        {cocktail.strAlcoholic === 'Alcoholic' ? 'Yes' : 'No'}
      </h3>
      <h3>
        Serve:
        {cocktail.strGlass}
      </h3>
      <img src={cocktail.strDrinkThumb} alt="cocktail-img" />
      <h3>Ingredients</h3>
      <ul>
        {ingredients.map((item, index) => (
          <li key={item}>
            {item}
            {' '}
            -
            {' '}
            {measures[index]}
          </li>
        ))}
      </ul>
      <h3>Instructions</h3>
      <p>{cocktail.strInstructions}</p>

    </div>
  );
};
export default Cocktail;
