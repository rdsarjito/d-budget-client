import {
  ADD_TRANSACTIONS,
  GET_TRANSACTIONS,
  GET_CATEGORIES,
} from './types';

export const addTransaction  = (API, format, POST) => async dispatch => {
  const res = await fetch(`${API}/api/${format}`, POST);
  const respond = await res.json();
  dispatch({ type: ADD_TRANSACTIONS, payload: respond });
};

export const getTransaction = (API, format, GET) => async dispatch => {
  const res = await fetch(`${API}/api/${format}`, GET);
  const respond = await res.json();
  dispatch({ type: GET_TRANSACTIONS, payload: respond });
};

export const getCategory = (API, format, GET) => async dispatch => {
  const res = await fetch(`${API}/api/${format}`, GET);
  const respond = await res.json();
  dispatch({ type: GET_CATEGORIES, payload: respond });
};

export const deleteTransaction = (API, format, DELETE, id) => async () => {
  await fetch(`${API}/api/${format}/` + id, DELETE);
};

export const deleteCategory = (API, format, DELETE, id) => async () => {
  await fetch(`${API}/api/${format}/` + id, DELETE);
};