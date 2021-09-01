import { RECIPES_LOADING, RECIPES_FAIL, RECIPES_SUCCESS } from '../actions/recipesActions';

const initialState = {
  loading: false,
  data: null,
  errorMSG: '',
};

const recipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECIPES_LOADING:
      return { ...state, loading: true, errorMSG: '' };
    case RECIPES_FAIL:
      return {
        ...state, loading: false, data: [], errorMSG: 'Yikes! Unable to get data',
      };
    case RECIPES_SUCCESS:
      return {
        ...state, loading: false, data: action.payload, errorMSG: '',
      };
    default:
      return state;
  }
};

export default recipesReducer;
