import { combineReducers } from 'redux';
import listReducer from './listReducer';

const reducer = combineReducers({
  cocktails: listReducer,
});

export default reducer;
