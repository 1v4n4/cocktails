import { combineReducers } from 'redux';
import listReducer from './listReducer';
import cocktailReducer from './cocktailReducer';
import searchReducer from './searchReducer';
import catReducer from './categoryReducer';
import ingReducer from './ingredientsReducer';
import alcoReducer from './alcoReducer';
import nonAlcoReducer from './nonAlcoReducer';
import recipesReducer from './receipesReducer';

const reducer = combineReducers({
  cocktails: listReducer,
  searched: searchReducer,
  cocktail: cocktailReducer,
  category: catReducer,
  ingredients: ingReducer,
  alcoholic: alcoReducer,
  nonalcoholic: nonAlcoReducer,
  recipes: recipesReducer,
});

export default reducer;
