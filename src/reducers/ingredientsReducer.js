import { ING_LOADING, ING_FAIL, ING_SUCCESS } from '../actions';

const initialState = {
  loading: false,
  data: [],
  errorMSG: '',
};

const ingReducer = (state = initialState, action) => {
  switch (action.type) {
    case ING_LOADING:
      return { ...state, loading: true, errorMSG: '' };
    case ING_FAIL:
      return {
        ...state, loading: false, data: [], errorMSG: 'Yikes! Unable to get data',
      };
    case ING_SUCCESS:
      return {
        ...state, loading: false, data: action.payload, errorMSG: '',
      };
    default:
      return state;
  }
};

export default ingReducer;
