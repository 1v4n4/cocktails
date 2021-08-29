import axios from 'axios';

const SEARCH_LOADING = 'SEARCH LOADING';
const SEARCH_FAIL = 'SEARCH FAIL';
const SEARCH_SUCCESS = 'SEARCH SUCCESS';

const getSearch = (search) => async (dispatch) => {
  try {
    dispatch({
      type: SEARCH_LOADING,
    });
    const result = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`);

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

export {
  SEARCH_FAIL, SEARCH_SUCCESS, SEARCH_LOADING, getSearch,
};
