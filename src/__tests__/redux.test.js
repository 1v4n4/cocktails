import alcoReducer from '../reducers/alcoReducer';
import nonAlcoReducer from '../reducers/nonAlcoReducer';
import { getAlco } from '../actions/alcoActions';
import { getNonAlco } from '../actions/nonAlcoActions';
import cocktailReducer from '../reducers/cocktailReducer';
import { getCocktail } from '../actions/cocktailActions';
import { getCatList } from '../actions/categoryActions';
import catReducer from '../reducers/categoryReducer';
import listReducer from '../reducers/listReducer';
import { getLetterList } from '../actions/letterActions';
import searchReducer from '../reducers/searchReducer';
import { getSearch } from '../actions/searchActions';

it('returns the initial state', () => {
  expect(alcoReducer(undefined, {})).toEqual({
    loading: false,
    data: null,
    errorMSG: '',
  });
});

it('updates the list of alcoholic drinks', () => {
  expect(alcoReducer({}, getAlco(['Results']))).toBeInstanceOf(Object);
});

it('returns the initial state', () => {
  expect(nonAlcoReducer(undefined, {})).toEqual({
    loading: false,
    data: null,
    errorMSG: '',
  });
});

it('updates the list of nonalcoholic drinks', () => {
  expect(nonAlcoReducer({}, getNonAlco(['Results']))).toBeInstanceOf(Object);
});

it('returns the initial state', () => {
  expect(cocktailReducer(undefined, {})).toEqual({
    loading: false,
    data: {},
    errorMSG: '',
  });
});

it('finds a cocktail', () => {
  expect(cocktailReducer({}, getCocktail(['Result']))).toBeInstanceOf(Object);
});

it('returns the initial state', () => {
  expect(catReducer(undefined, {})).toEqual({
    loading: false,
    data: null,
    errorMSG: '',
  });
});

it('updates category list', () => {
  expect(catReducer({}, getCatList(['Result']))).toBeInstanceOf(Object);
});

it('returns the initial state', () => {
  expect(listReducer(undefined, {})).toEqual({
    loading: false,
    data: null,
    errorMSG: '',
  });
});

it('updates the list alphabetical list', () => {
  expect(listReducer({}, getLetterList(['Results']))).toBeInstanceOf(Object);
});

it('returns the initial state', () => {
  expect(searchReducer(undefined, {})).toEqual({
    loading: false,
    data: null,
    errorMSG: '',
  });
});

it('updates the search', () => {
  expect(searchReducer({}, getSearch(['Results']))).toBeInstanceOf(Object);
});
