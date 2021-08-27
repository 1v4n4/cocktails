import axios from 'axios';

const LIST_LOADING = 'LIST LOADING';
const LIST_FAIL = 'LIST FAIL';
const LIST_SUCCESS = 'LIST SUCCESS';
const COCKTAIL_LOADING = 'COCKTAIL LOADING';
const COCKTAIL_FAIL = 'COCKTAIL FAIL';
const COCKTAIL_SUCCESS = 'COCKTAIL SUCCESS';
const SEARCH_LOADING = 'SEARCH LOADING';
const SEARCH_FAIL = 'SEARCH FAIL';
const SEARCH_SUCCESS = 'SEARCH SUCCESS';
const CAT_LOADING = 'CAT LOADING';
const CAT_FAIL = 'CAT FAIL';
const CAT_SUCCESS = 'CAT SUCCESS';

const getLetterList = (letter) => async (dispatch) => {
  console.log('letter', letter);
  try {
    dispatch({
      type: LIST_LOADING,
    });
    const result = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`);
    console.log('result from actions', result.data.drinks);
    dispatch({
      type: LIST_SUCCESS,
      payload: result.data.drinks,
    });
  } catch (error) {
    dispatch({
      type: LIST_FAIL,
    });
  }
};

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

const getSearch = (search) => async (dispatch) => {
  console.log('search', search);
  try {
    dispatch({
      type: SEARCH_LOADING,
    });
    const result = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`);
    console.log('result from search', result.data);
    dispatch({
      type: SEARCH_SUCCESS,
      payload: result.data.drinks,
    });
  } catch (error) {
    dispatch({
      type: SEARCH_FAIL,
    });
  }
};

const getCatList = (category) => async (dispatch) => {
  console.log('category', category);
  try {
    dispatch({
      type: CAT_LOADING,
    });
    console.log('here');
    const result = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`);
    console.log('result from category', result.data.drinks);
    dispatch({
      type: CAT_SUCCESS,
      payload: result.data.drinks,
    });
  } catch (error) {
    dispatch({
      type: CAT_FAIL,
    });
  }
};

export {
  LIST_LOADING, LIST_FAIL, LIST_SUCCESS, getLetterList,
  COCKTAIL_FAIL, COCKTAIL_SUCCESS, COCKTAIL_LOADING, getCocktail,
  SEARCH_FAIL, SEARCH_SUCCESS, SEARCH_LOADING, getSearch,
  CAT_LOADING, CAT_FAIL, CAT_SUCCESS, getCatList,
};
