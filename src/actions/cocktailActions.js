import axios from 'axios';

const COCKTAIL_LOADING = 'COCKTAIL LOADING';
const COCKTAIL_FAIL = 'COCKTAIL FAIL';
const COCKTAIL_SUCCESS = 'COCKTAIL SUCCESS';

const getCocktail = (name) => async (dispatch) => {
  const newName = name.split(' ').join('_');
  try {
    dispatch({
      type: COCKTAIL_LOADING,
    });
    const result = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${newName}`);
    dispatch({
      type: COCKTAIL_SUCCESS,
      payload: result.data.drinks[0],
    });
  } catch (error) {
    dispatch({
      type: COCKTAIL_FAIL,
    });
  }
};

export {
  COCKTAIL_FAIL, COCKTAIL_SUCCESS, COCKTAIL_LOADING, getCocktail,
};
