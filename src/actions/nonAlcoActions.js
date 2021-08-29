import axios from 'axios';

const NONALCO_LOADING = 'NONALCO LOADING';
const NONALCO_FAIL = 'NONALCO FAIL';
const NONALCO_SUCCESS = 'NONALCO SUCCESS';

const getNonAlco = () => async (dispatch) => {
  try {
    dispatch({
      type: NONALCO_LOADING,
    });
    const result = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic');
    console.log('result from NONALCOegory', result.data.drinks);
    dispatch({
      type: NONALCO_SUCCESS,
      payload: result.data.drinks,
    });
  } catch (error) {
    dispatch({
      type: NONALCO_FAIL,
    });
  }
};

export {
  NONALCO_LOADING, NONALCO_FAIL, NONALCO_SUCCESS, getNonAlco,
};
