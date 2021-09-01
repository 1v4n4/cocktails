import axios from 'axios';

const LIST_LOADING = 'LIST LOADING';
const LIST_FAIL = 'LIST FAIL';
const LIST_SUCCESS = 'LIST SUCCESS';

const getLetterList = (letter) => async (dispatch) => {
  try {
    dispatch({
      type: LIST_LOADING,
    });
    const result = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`);
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
  LIST_LOADING, LIST_FAIL, LIST_SUCCESS, getLetterList,

};
