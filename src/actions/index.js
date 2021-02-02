import {
  FETCH_USER,
  ADD_TRANSACTION,
  GET_TRANSACTIONS,
  DELETE_TRANSACTION,
  ADD_CATEGORY,
  GET_CATEGORIES,
  DELETE_CATEGORY,
} from './types';

export const fetchUser = (API, obj) => async dispatch => {
  const res = await fetch(`${API}/api/google-login`, obj);
  const respond = await res.json();
  dispatch({ type: FETCH_USER, payload: respond });
};

export const addTransaction  = (API, format, POST) => async dispatch => {
  const res = await fetch(`${API}/api/${format}`, POST);
  const respond = await res.json();
  dispatch({ type: ADD_TRANSACTION, payload: respond });
};

export const getTransaction = (API, format, GET) => async dispatch => {
  const res = await fetch(`${API}/api/${format}`, GET);
  const respond = await res.json();
  dispatch({ type: GET_TRANSACTIONS, payload: respond });
};

export const deleteTransaction = (API, format, DELETE, id) => async dispatch => {
  await fetch(`${API}/api/${format}/` + id, DELETE);
  dispatch({ type: DELETE_TRANSACTION, payload: id });
};

export const addCategory = (API, format, POST) => async dispatch => {
  const res = await fetch(`${API}/api/${format}`, POST);
  const respond = await res.json();
  dispatch({ type: ADD_CATEGORY, payload: respond });
};

export const getCategory = (API, format, GET) => async dispatch => {
  const res = await fetch(`${API}/api/${format}`, GET);
  const respond = await res.json();
  dispatch({ type: GET_CATEGORIES, payload: respond });
};

export const deleteCategory = (API, format, DELETE, id) => async dispatch => {
  await fetch(`${API}/api/${format}/` + id, DELETE);
  dispatch({ type: DELETE_CATEGORY, payload: id })
};