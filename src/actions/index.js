import {
  GET_TRANSACTIONS,
  GET_CATEGORIES
} from './types';

export const add  = (API, POST) => async () => {
  await fetch(`${API}/api/transactions`, POST);
};

export const get = (API, format, GET) => async dispatch => {
  const res = await fetch(`${API}/api/${format}`, GET);
  const respond = await res.json();
  dispatch({ type: GET_TRANSACTIONS, payload: respond });
};

export const getCategories = (API, format, GET) => async dispatch => {
  const res = await fetch(`${API}/api/${format}`, GET);
  const respond = await res.json();
  dispatch({ type: GET_CATEGORIES, payload: respond });
};

export const del = (API, format, DELETE, id) => async () => {
  await fetch(`${API}/api/${format}/` + id, DELETE);
};