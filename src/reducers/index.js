import { combineReducers } from 'redux';
import transactionReducer from './transactionReducer';
import categoryReducer from './categoryReducer';
import authReducer from './authReducer';

export default combineReducers({
  transactions: transactionReducer,
  categories: categoryReducer,
  auth: authReducer
});