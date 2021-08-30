import axios from 'axios';

const RECIPES_LOADING = 'RECIPES LOADING';
const RECIPES_FAIL = 'RECIPES FAIL';
const RECIPES_SUCCESS = 'RECIPES SUCCESS';

const getRecipes = (ing) => async (dispatch) => {
  try {
    dispatch({
      type: RECIPES_LOADING,
    });
    const result = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ing}`);
    dispatch({
      type: RECIPES_SUCCESS,
      payload: result.data.drinks,
    });
  } catch (error) {
    dispatch({
      type: RECIPES_FAIL,
    });
  }
};

export {
  RECIPES_LOADING, RECIPES_FAIL, RECIPES_SUCCESS, getRecipes,
};
