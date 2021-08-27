import { combineReducers } from 'redux';
import listReducer from './listReducer';
import cocktailReducer from './cocktailReducer';

const reducer = combineReducers({
  cocktails: listReducer,
  cocktail: cocktailReducer,
});

export default reducer;
