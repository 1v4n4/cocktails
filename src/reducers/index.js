import { combineReducers } from 'redux';
import listReducer from './listReducer';
import cocktailReducer from './cocktailReducer';
import searchReducer from './searchReducer';
import catReducer from './categoryReducer';
import ingReducer from './ingredientsReducer';

const reducer = combineReducers({
  cocktails: listReducer,
  searched: searchReducer,
  cocktail: cocktailReducer,
  category: catReducer,
  ingredients: ingReducer,
});

export default reducer;
