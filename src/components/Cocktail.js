import React from 'react';
import { useSelector } from 'react-redux';

/* eslint-disable */
const Cocktail = (props) => {
  const name = props.match.params.cocktail;
  const state = useSelector((state) => state.cocktails)
  const cocktail = state.data.filter(item => item.strDrink === name)
  console.log('koktel', cocktail, cocktail[0].strIngredient1)
  const count = 1;
  const ing = 'strIngredient';


  const ingredients = Object.keys(cocktail[0])
          .filter(key => key.match(/ingredient/i))
          .filter(key => !!cocktail[0][key] || cocktail[0][key] === ' ')
          .map(key => cocktail[0][key].trim())

          console.log('ing', ingredients)

          const measures = Object.keys(cocktail[0])
          .filter(key => key.match(/strMeasure/i))
          .filter(key => !!cocktail[0][key] || cocktail[0][key] === ' ')
          .map(key => cocktail[0][key].trim())

          console.log('ing', measures)


  return (<div>
  <h1>{name}</h1>
  <h3>Category: {cocktail[0].strCategory}</h3>
  <h3>Alcoholic: {cocktail[0].strAlcoholic === "Alcoholic" ? "Yes" : "No"}</h3>
  <h3>Serve: {cocktail[0].strGlass}</h3>
  <img src={cocktail[0].strDrinkThumb} alt="cocktail-img" />
  <h3>Ingredients</h3>
  <ul>
  {ingredients.map((item, index) => <li>{item} - {measures[index]}</li>)}
  </ul>
  <h3>Instructions</h3>
  <p>{cocktail[0].strInstructions}</p>


  </div>);

};
export default Cocktail;
