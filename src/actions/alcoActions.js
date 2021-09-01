import axios from 'axios';

const ALCO_LOADING = 'ALCO LOADING';
const ALCO_FAIL = 'ALCO FAIL';
const ALCO_SUCCESS = 'ALCO SUCCESS';

const getAlco = () => async (dispatch) => {
  try {
    dispatch({
      type: ALCO_LOADING,
    });
    const result = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic');
    dispatch({
      type: ALCO_SUCCESS,
      payload: result.data.drinks,
    });
  } catch (error) {
    dispatch({
      type: ALCO_FAIL,
    });
  }
};

export {
  ALCO_LOADING, ALCO_FAIL, ALCO_SUCCESS, getAlco,
};
