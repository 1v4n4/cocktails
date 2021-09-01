import {
  ALCO_LOADING, ALCO_FAIL, ALCO_SUCCESS,
} from '../actions/alcoActions';

const initialState = {
  loading: false,
  data: null,
  errorMSG: '',
};

const alcoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALCO_LOADING:
      return { ...state, loading: true, errorMSG: '' };
    case ALCO_FAIL:
      return {
        ...state, loading: false, data: [], errorMSG: 'Yikes! Unable to get data',
      };
    case ALCO_SUCCESS:
      return {
        ...state, loading: false, data: action.payload, errorMSG: '',
      };
    default:
      return state;
  }
};

export default alcoReducer;
