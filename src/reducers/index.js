import { combineReducers } from 'redux';
import transactionReducer from './transactionReducer';
import categoryReducer from './categoryReducer';
import userReducer from './userReducer';

export default combineReducers({
  transactions: transactionReducer,
  categories: categoryReducer,
  user: userReducer
});