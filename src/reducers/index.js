import { combineReducers } from 'redux';
import balanceReducer from './balanceReducer';

export default combineReducers({
  balances: balanceReducer
});