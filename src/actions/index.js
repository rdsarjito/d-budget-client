import {
  GET_INCOME,
} from './types';

export const add  = (API, format, POST) => async dispatch => {
  await fetch(`${API}/api/${format}`, POST);
};

export const getIncome = (API, obj) => async dispatch => {
  const res = await fetch(`${API}/api/income`, obj);
  const respond = await res.json();
  dispatch({ type: GET_INCOME, payload: respond });
};

export const deleteIncome = (API, obj, id) => async dispatch => {
  await fetch(`${API}/api/income/` + id, obj);
};