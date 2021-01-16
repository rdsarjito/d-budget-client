import {
  GET_INCOME,
} from './types';

export const addIncome = (API, obj) => async dispatch => {
  await fetch(`${API}/api/income`, obj);
};

export const getIncome = (API, obj) => async dispatch => {
  const res = await fetch(`${API}/api/income`, obj);
  const respond = await res.json();
  dispatch({ type: GET_INCOME, payload: respond });
};