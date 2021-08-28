import axios from 'axios';

const COCKTAIL_LOADING = 'COCKTAIL LOADING';
const COCKTAIL_FAIL = 'COCKTAIL FAIL';
const COCKTAIL_SUCCESS = 'COCKTAIL SUCCESS';

const getCocktail = (name) => async (dispatch) => {
  console.log('name', name);
  const newName = name.split(' ').join('_');
  console.log('newname', newName);
  try {
    dispatch({
      type: COCKTAIL_LOADING,
    });
    const result = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${newName}`);
    console.log('result from getcock', result.data.drinks[0]);
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
