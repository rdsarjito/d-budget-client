import {
  GET_TRANSACTIONS,
  GET_CATEGORIES
} from './types';

export const addTransactions = (API, POST) => async () => {
  await fetch(`${API}/api/transactions`, POST);
};

export const get = (API, GET) => async dispatch => {
  const res = await fetch(`${API}/api/transactions`, GET);
  const respond = await res.json();
  dispatch({ type: GET_TRANSACTIONS, payload: respond });
};

export const getCategories = (API, format, GET) => async dispatch => {
  const res = await fetch(`${API}/api/${format}`, GET);
  const respond = await res.json();
  dispatch({ type: GET_CATEGORIES, payload: respond });
};

export const del = (API, DELETE, id) => async () => {
  await fetch(`${API}/api/transactions/` + id, DELETE);
};