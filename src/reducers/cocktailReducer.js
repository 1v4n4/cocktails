import { COCKTAIL_FAIL, COCKTAIL_SUCCESS, COCKTAIL_LOADING } from '../actions/cocktailActions';

const initialState = {
  loading: false,
  data: {},
  errorMSG: '',
};

const cocktailReducer = (state = initialState, action) => {
  console.log('in cock reducer');
  switch (action.type) {
    case COCKTAIL_LOADING:
      return { ...state, loading: true, errorMSG: '' };
    case COCKTAIL_FAIL:
      return {
        ...state, loading: false, data: [], errorMSG: 'Yikes! Unable to get data',
      };
    case COCKTAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default cocktailReducer;
