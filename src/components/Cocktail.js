import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCocktail } from '../actions/cocktailActions';
import '../CSS/cocktail.css';

const Cocktail = (props) => {
  // eslint-disable-next-line
  const name = props.match.params.cocktail;

  const cocktail = useSelector((state) => state.cocktail.data);

  const dispatch = useDispatch();

  const fetchCocktail = (name) => {
    dispatch(getCocktail(name));
  };

  useEffect(() => {
    fetchCocktail(name);
  }, [name]);

  const ingredients = Object.keys(cocktail)
    .filter((key) => key.match(/ingredient/i))
    .filter((key) => !!cocktail[key] || cocktail[key] === ' ')
    .map((key) => cocktail[key].trim());

  const measures = Object.keys(cocktail)
    .filter((key) => key.match(/strMeasure/i))
    .filter((key) => !!cocktail[key] || cocktail[key] === ' ')
    .map((key) => cocktail[key].trim());

  return (
    <div className="cocktail-div">
      <div className="data-div">

        <h1 className="coctail-name">{name}</h1>
        <div className="title-div">
          <h3 className="coc-description">
            Category
            {' '}
            <p className="coc-description-txt">
              {cocktail.strCategory}
            </p>
          </h3>
          <h3 className="coc-description">
            Alcoholic
            <p className="coc-description-txt">
              {cocktail.strAlcoholic === 'Alcoholic' ? 'Yes' : 'No'}
            </p>
          </h3>
          <h3 className="coc-description">
            Serve
            <p className="coc-description-txt">
              {cocktail.strGlass}
            </p>
          </h3>
        </div>
        <div className="flex-div">
          <div className="ing-div">
            <h3 className="coc-description">Ingredients</h3>
            <ul>
              {ingredients.map((item, index) => (
                <li key={item} className="coc=txt">
                  {item}
                  {' '}
                  -
                  {' '}
                  {measures[index]}
                </li>
              ))}
            </ul>
          </div>
          <div className="instructions-div">
            <h3 className="coc-description">Instructions</h3>
            <p className="coc-txt">{cocktail.strInstructions}</p>
            { cocktail.strVideo && <p className="yt-link"><a href={cocktail.strVideo} target="_blank" rel="noreferrer">Watch on Youtube</a></p>}
          </div>
        </div>
      </div>
      <div className="cocktail-img-div">
        <img className="cocktail-img" src={cocktail.strDrinkThumb} alt="cocktail-img" />
      </div>

    </div>
  );
};
export default Cocktail;
