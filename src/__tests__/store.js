import { createStore, combineReducers } from 'redux';
import listReducer from '../reducers/listReducer';
import cocktailReducer from '../reducers/cocktailReducer';
import searchReducer from '../reducers/searchReducer';
import catReducer from '../reducers/categoryReducer';
import ingReducer from '../reducers/ingredientsReducer';
import alcoReducer from '../reducers/alcoReducer';
import nonAlcoReducer from '../reducers/nonAlcoReducer';

const createTestStore = () => {
  const store = createStore(
    combineReducers({
      cocktails: listReducer,
      searched: searchReducer,
      cocktail: cocktailReducer,
      category: catReducer,
      ingredients: ingReducer,
      alcoholic: alcoReducer,
      nonalcoholic: nonAlcoReducer,
    }),
  );
  return store;
};

it('should set the state object', () => {
  const store = createTestStore();
  expect(store).toBeInstanceOf(Object);
});

export default createTestStore;
