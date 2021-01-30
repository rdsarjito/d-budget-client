import { combineReducers } from 'redux';
import balanceReducer from './balanceReducer';
import categoryReducer from './categoryReducer';

export default combineReducers({
  transactions: balanceReducer,
  categories: categoryReducer,
});