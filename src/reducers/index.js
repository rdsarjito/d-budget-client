import { combineReducers } from 'redux';
import add from './incomeReducer';

export default combineReducers({
  incomes: add
});