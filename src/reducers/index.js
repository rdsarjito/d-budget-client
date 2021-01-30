import { combineReducers } from 'redux';
import transactionReducer from './transactionReducer';
import categoryReducer from './categoryReducer';

export default combineReducers({
  transactions: transactionReducer,
  categories: categoryReducer,
});