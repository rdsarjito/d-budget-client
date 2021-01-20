import { combineReducers } from 'redux';
import balanceReducer from './balanceReducer';
import categoryReducer from './categoryReducer';

export default combineReducers({
  balances: balanceReducer,
  categories: categoryReducer,
});