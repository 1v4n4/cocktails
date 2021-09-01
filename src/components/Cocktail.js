import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { getCocktail } from '../actions/cocktailActions';
import '../CSS/cocktail.css';

const Cocktail = (props) => {
  const { match: { params: { cocktail } } } = props;

  const cocktailObject = useSelector((state) => state.cocktail.data);

  const dispatch = useDispatch();

  const fetchCocktail = (cocktail) => {
    dispatch(getCocktail(cocktail));
  };

  useEffect(() => {
    fetchCocktail(cocktail);
  }, [cocktail]);

  const ingredients = Object.keys(cocktailObject)
    .filter((key) => key.match(/ingredient/i))
    .filter((key) => !!cocktailObject[key] || cocktailObject[key] === ' ')
    .map((key) => cocktailObject[key].trim());

  const measures = Object.keys(cocktailObject)
    .filter((key) => key.match(/strMeasure/i))
    .filter((key) => !!cocktailObject[key] || cocktailObject[key] === ' ')
    .map((key) => cocktailObject[key].trim());

  return (
    <div className="cocktail-div">
      <div className="data-div">

        <h1 className="cocktail-name">{cocktail}</h1>
        <div className="title-div">
          <div>
            <h3 className="coc-description">
              Category
            </h3>
            <p className="coc-description-txt">
              {cocktailObject.strCategory}
            </p>
          </div>
          <div>
            <h3 className="coc-description">
              Alcoholic
            </h3>
            <p className="coc-description-txt">
              {cocktailObject.strAlcoholic === 'Alcoholic' ? 'Yes' : 'No'}
            </p>
          </div>
          <div>
            <h3 className="coc-description">
              Serve
            </h3>
            <p className="coc-description-txt">
              {cocktailObject.strGlass}
            </p>
          </div>
        </div>
        <div className="flex-div">
          <div className="ing-div">
            <h3 className="coc-description">Ingredients</h3>
            <ul>
              {ingredients.map((item, index) => (
                <li key={item} className="coc-txt">
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
            <p className="coc-txt">{cocktailObject.strInstructions}</p>
            { cocktailObject.strVideo && <p className="yt-link"><a href={cocktailObject.strVideo} target="_blank" rel="noreferrer">Watch on Youtube</a></p>}
          </div>
        </div>
      </div>
      <div className="cocktail-img-div">
        <img className="cocktail-img" src={cocktailObject.strDrinkThumb} alt="cocktail-img" />
      </div>

    </div>
  );
};

Cocktail.propTypes = {
  match: PropTypes.instanceOf(Object).isRequired,
};

export default Cocktail;
