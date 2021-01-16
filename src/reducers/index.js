import { combineReducers } from 'redux';
import storeIncome from './incomeReducer';

export default combineReducers({
  incomes: storeIncome
});