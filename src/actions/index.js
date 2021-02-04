import {
  AUTH_GOOGLE,
  ADD_TRANSACTION,
  GET_TRANSACTIONS,
  DELETE_TRANSACTION,
  ADD_CATEGORY,
  GET_CATEGORIES,
  DELETE_CATEGORY,
} from './types';

const API = `http://localhost:5000`;

export const fetchUser = (code) => async dispatch => {
  const POST = {  
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(code)
  };
  const res = await fetch(`${API}/api/google-login`, POST);
  const respond = await res.json();
  console.log(respond)
  dispatch({ type: AUTH_GOOGLE, payload: respond });
};

export const addTransaction  = (type, data) => async dispatch => {
  const POST = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ data })
  };
  const res = await fetch(`${API}/${type}`, POST);
  const respond = await res.json();
  dispatch({ type: ADD_TRANSACTION, payload: respond });
};

export const getTransaction = (API, format, GET) => async dispatch => {
  const res = await fetch(`${API}/${format}`, GET);
  const respond = await res.json();
  dispatch({ type: GET_TRANSACTIONS, payload: respond });
};

export const deleteTransaction = (API, format, DELETE, id) => async dispatch => {
  await fetch(`${API}/${format}/` + id, DELETE);
  dispatch({ type: DELETE_TRANSACTION, payload: id });
};

export const addCategory = (type, data) => async dispatch => {
  const POST = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ data })
  };
  const res = await fetch(`${API}/${type}`, POST);
  const respond = await res.json();
  dispatch({ type: ADD_CATEGORY, payload: respond });
};

export const getCategory = (API, format, GET) => async dispatch => {
  const res = await fetch(`${API}/${format}`, GET);
  const respond = await res.json();
  dispatch({ type: GET_CATEGORIES, payload: respond });
};

export const deleteCategory = (API, format, DELETE, id) => async dispatch => {
  await fetch(`${API}/${format}/` + id, DELETE);
  dispatch({ type: DELETE_CATEGORY, payload: id })
};