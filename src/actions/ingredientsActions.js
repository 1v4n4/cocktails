import axios from 'axios';

const ING_LOADING = 'ING LOADING';
const ING_FAIL = 'ING FAIL';
const ING_SUCCESS = 'ING SUCCESS';

const getIng = () => async (dispatch) => {
  try {
    dispatch({
      type: ING_LOADING,
    });
    const result = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list');
    console.log('result from ing', result.data.drinks);
    dispatch({
      type: ING_SUCCESS,
      payload: result.data.drinks,
    });
  } catch (error) {
    dispatch({
      type: ING_FAIL,
    });
  }
};

export {
  ING_LOADING, ING_FAIL, ING_SUCCESS, getIng,
};
