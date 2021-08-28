import { SEARCH_LOADING, SEARCH_FAIL, SEARCH_SUCCESS } from '../actions/searchActions';

const initialState = {
  loading: false,
  data: null,
  errorMSG: '',
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_LOADING:
      return { ...state, loading: true, errorMSG: '' };
    case SEARCH_FAIL:
      return {
        ...state, loading: false, data: [], errorMSG: 'Yikes! Unable to get data',
      };
    case SEARCH_SUCCESS:
      return {
        ...state, loading: false, data: action.payload, errorMSG: '',
      };
    default:
      return state;
  }
};

export default searchReducer;
