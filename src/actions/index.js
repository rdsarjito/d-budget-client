import {
  GET_TRANSACTIONS,
  GET_CATEGORIES
} from './types';

<<<<<<< HEAD
export const addTransaction  = (API, format, POST) => async () => {
  await fetch(`${API}/api/${format}`, POST);
};

export const getTransaction = (API, format, GET) => async dispatch => {
  const res = await fetch(`${API}/api/${format}`, GET);
=======
export const addTransactions = (API, POST) => async () => {
  await fetch(`${API}/api/transactions`, POST);
};

export const get = (API, GET) => async dispatch => {
  const res = await fetch(`${API}/api/transactions`, GET);
>>>>>>> ae91bc5b358d1736cbbf61078ded3aa9f4c6b548
  const respond = await res.json();
  dispatch({ type: GET_TRANSACTIONS, payload: respond });
};

export const getCategory = (API, format, GET) => async dispatch => {
  const res = await fetch(`${API}/api/${format}`, GET);
  const respond = await res.json();
  dispatch({ type: GET_CATEGORIES, payload: respond });
};

<<<<<<< HEAD
export const deleteTransaction = (API, format, DELETE, id) => async () => {
  await fetch(`${API}/api/${format}/` + id, DELETE);
};

export const deleteCategory = (API, format, DELETE, id) => async () => {
  await fetch(`${API}/api/${format}/` + id, DELETE);
=======
export const del = (API, DELETE, id) => async () => {
  await fetch(`${API}/api/transactions/` + id, DELETE);
>>>>>>> ae91bc5b358d1736cbbf61078ded3aa9f4c6b548
};