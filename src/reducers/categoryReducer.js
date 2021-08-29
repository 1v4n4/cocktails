import { CAT_LOADING, CAT_FAIL, CAT_SUCCESS } from '../actions/categoryActions';

const initialState = {
  loading: false,
  data: null,
  errorMSG: '',
};

const catReducer = (state = initialState, action) => {
  switch (action.type) {
    case CAT_LOADING:
      return { ...state, loading: true, errorMSG: '' };
    case CAT_FAIL:
      return {
        ...state, loading: false, data: [], errorMSG: 'Yikes! Unable to get data',
      };
    case CAT_SUCCESS:
      return {
        ...state, loading: false, data: action.payload, errorMSG: '',
      };
    default:
      return state;
  }
};

export default catReducer;
