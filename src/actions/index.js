import axios from 'axios';

const LIST_LOADING = 'LIST LOADING';
const LIST_FAIL = 'LIST FAIL';
const LIST_SUCCESS = 'LIST SUCCESSLIST_SUCCESS';

const getList = (letter) => async (dispatch) => {
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

export {
  LIST_LOADING, LIST_FAIL, LIST_SUCCESS, getList,
};
