import axios from 'axios';

const CAT_LOADING = 'CAT LOADING';
const CAT_FAIL = 'CAT FAIL';
const CAT_SUCCESS = 'CAT SUCCESS';

const getCatList = (category) => async (dispatch) => {
  try {
    dispatch({
      type: CAT_LOADING,
    });
    const result = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`);
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
  CAT_LOADING, CAT_FAIL, CAT_SUCCESS, getCatList,
};
