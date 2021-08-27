import { combineReducers } from 'redux';
import listReducer from './listReducer';
import cocktailReducer from './cocktailReducer';
import searchReducer from './searchReducer';
import catReducer from './categoryReducer';

const reducer = combineReducers({
  cocktails: listReducer,
  searched: searchReducer,
  cocktail: cocktailReducer,
  category: catReducer,
});

export default reducer;
