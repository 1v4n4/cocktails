import {
  NONALCO_LOADING, NONALCO_FAIL, NONALCO_SUCCESS,
} from '../actions/nonAlcoActions';

const initialState = {
  loading: false,
  data: null,
  errorMSG: '',
};

const nonAlcoReducer = (state = initialState, action) => {
  switch (action.type) {
    case NONALCO_LOADING:
      return { ...state, loading: true, errorMSG: '' };
    case NONALCO_FAIL:
      return {
        ...state, loading: false, data: [], errorMSG: 'Yikes! Unable to get data',
      };
    case NONALCO_SUCCESS:
      return {
        ...state, loading: false, data: action.payload, errorMSG: '',
      };
    default:
      return state;
  }
};

export default nonAlcoReducer;
