import { combineReducers } from 'redux';
import addIncome from './incomeReducer';

export default combineReducers({
  incomes: addIncome
});