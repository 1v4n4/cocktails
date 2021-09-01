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

describe('alcoReducer', () => {
  it('returns the initial state', () => {
    expect(alcoReducer(undefined, {})).toEqual({
      loading: false,
      data: null,
      errorMSG: '',
    });
  });

  it('returns the initial state', () => {
    const object = (alcoReducer(undefined, {}));
    expect(object.data).not.toBe(Object);
  });
});

describe('alcoReducer, getAlco', () => {
  it('updates the list of alcoholic drinks', () => {
    expect(alcoReducer({}, getAlco(['Results']))).toBeInstanceOf(Object);
  });

  it('updates the list of alcoholic drinks', () => {
    const object = alcoReducer({}, getAlco(['Results']));
    expect(object.data).not.toBe(null);
  });
});

describe('nonAlcoReducer', () => {
  it('returns the initial state', () => {
    expect(nonAlcoReducer(undefined, {})).toEqual({
      loading: false,
      data: null,
      errorMSG: '',
    });
  });

  it('returns the initial state', () => {
    const object = nonAlcoReducer(undefined, {});
    expect(object.data).not.toBe(Object);
  });
});

describe('nonAlcoReducer, getNonAlco', () => {
  it('updates the list of nonalcoholic drinks', () => {
    expect(nonAlcoReducer({}, getNonAlco(['Results']))).toBeInstanceOf(Object);
  });

  it('updates the list of nonalcoholic drinks, negative outcome', () => {
    const object = nonAlcoReducer({}, getNonAlco(['Results']));
    expect(object.data).not.toBe(null);
  });
});

describe('cocktailReducer', () => {
  it('returns the initial state', () => {
    expect(cocktailReducer(undefined, {})).toEqual({
      loading: false,
      data: {},
      errorMSG: '',
    });
  });

  it('returns the initial state, negative outcome', () => {
    const object = (cocktailReducer(undefined, {}));
    expect(object.data).not.toBe(Object);
  });
});

describe('cocktailReducer, getCocktail', () => {
  it('finds a cocktail', () => {
    expect(cocktailReducer({}, getCocktail(['Result']))).toBeInstanceOf(Object);
  });

  it('finds a cocktail, negative outcome', () => {
    const object = cocktailReducer({}, getCocktail(['Result']));
    expect(object.data).not.toBe(null);
  });
});

describe('catReducer', () => {
  it('returns the initial state', () => {
    expect(catReducer(undefined, {})).toEqual({
      loading: false,
      data: null,
      errorMSG: '',
    });
  });

  it('returns the initial state, negative outcome', () => {
    const object = catReducer(undefined, {});
    expect(object.data).not.toBe(Object);
  });
});

describe('catReducer, getCatList', () => {
  it('updates category list', () => {
    expect(catReducer({}, getCatList(['Result']))).toBeInstanceOf(Object);
  });

  it('updates category list, negative outcome', () => {
    const object = catReducer({}, getCatList(['Result']));
    expect(object.data).not.toBe(null);
  });
});

describe('listReducer', () => {
  it('returns the initial state', () => {
    expect(listReducer(undefined, {})).toEqual({
      loading: false,
      data: null,
      errorMSG: '',
    });
  });

  it('returns the initial state, negative outcome', () => {
    const object = listReducer(undefined, {});
    expect(object.data).not.toBe(Object);
  });
});

describe('listReducer, getLetterList', () => {
  it('updates alphabetical list', () => {
    expect(listReducer({}, getLetterList(['Results']))).toBeInstanceOf(Object);
  });

  it('updates alphabetical list, negative outcome', () => {
    const object = listReducer({}, getLetterList(['Result']));
    expect(object.data).not.toBe(null);
  });
});

describe('searchReducer', () => {
  it('returns the initial state', () => {
    expect(searchReducer(undefined, {})).toEqual({
      loading: false,
      data: null,
      errorMSG: '',
    });
  });

  it('returns the initial state, negative outcome', () => {
    const object = searchReducer(undefined, {});
    expect(object.data).not.toBe(Object);
  });
});

describe('searchReducer, getSearch', () => {
  it('updates the search', () => {
    expect(searchReducer({}, getSearch(['Results']))).toBeInstanceOf(Object);
  });

  it('updates search list, negative outcome', () => {
    const object = searchReducer({}, getSearch(['Result']));
    expect(object.data).not.toBe(null);
  });
});
