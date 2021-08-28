import axios from 'axios';

const CAT_LOADING = 'CAT LOADING';
const CAT_FAIL = 'CAT FAIL';
const CAT_SUCCESS = 'CAT SUCCESS';

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
  CAT_LOADING, CAT_FAIL, CAT_SUCCESS, getCatList,
};
