import {
  GET_USER,
  ADD_USER,
  ADD_TRANSACTION,
  GET_TRANSACTIONS,
  DELETE_TRANSACTION,
  ADD_CATEGORY,
  GET_CATEGORIES,
  DELETE_CATEGORY,
  EMPTY_TRANSACTION,
  EMPTY_CATEGORY,
} from '../constants/actionTypes';

const API = `http://localhost:5000`;

export const adduser = (code) => async dispatch => {
  const POST = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(code)
  };
  const res = await fetch(`${API}/user`, POST);
  const respond = await res.json();

  dispatch({ type: ADD_USER, payload: respond });
};

export const getUser = () => async dispatch => {
  const token = localStorage.getItem('jwt_token')
  if(token === null) return;

  const GET = { 
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('jwt_token'))[0].accesToken
    }
  }

  const res = await fetch(`${API}/user`, GET)
  const respond = await res.json();

  dispatch({ type: GET_USER, payload: respond });
};

export const addTransaction  = (type, data) => async dispatch => {
  const token = localStorage.getItem('jwt_token')
  if(token === null) return;
  const POST = {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('jwt_token'))[0].accesToken,
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ data })
  };
  const res = await fetch(`${API}/${type}`, POST);
  const respond = await res.json();
  dispatch({ type: ADD_TRANSACTION, payload: respond });
};

export const getTransaction = (type) => async dispatch => {
  const token = localStorage.getItem('jwt_token');
  if(token === null) {
    return dispatch({ type: EMPTY_TRANSACTION });
  };
  const GET = {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('jwt_token'))[0].accesToken
    }
  };
  const res = await fetch(`${API}/${type}`, GET);
  const respond = await res.json();
  dispatch({ type: GET_TRANSACTIONS, payload: respond });
};

export const deleteTransaction = (type, id) => async dispatch => {
  const token = localStorage.getItem('jwt_token');
  if(token === null) {
    return dispatch({ type: EMPTY_TRANSACTION });
  };
  const DELETE = {
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('jwt_token'))[0].accesToken
    }
  };
  const res = await fetch(`${API}/${type}/` + id, DELETE);
  const respond = await res.json();
  dispatch({ type: DELETE_TRANSACTION, payload: respond });
};

export const addCategory = (data) => async dispatch => {
  const token = localStorage.getItem('jwt_token');
  if(token === null) return;
  const POST = {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('jwt_token'))[0].accesToken,
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ data })
  };
  const res = await fetch(`${API}/category`, POST);
  const respond = await res.json();
  dispatch({ type: ADD_CATEGORY, payload: respond });
};

export const getCategory = () => async dispatch => {
  const token = localStorage.getItem('jwt_token');
  if(token === null) {
    return dispatch({ type: EMPTY_CATEGORY });
  };
  const GET = {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('jwt_token'))[0].accesToken
    }
  };
  const res = await fetch(`${API}/category`, GET);
  const respond = await res.json();
  dispatch({ type: GET_CATEGORIES, payload: respond });
};

export const deleteCategory = (id) => async dispatch => {
  const token = localStorage.getItem('jwt_token');
  if(token === null) return;
  const DELETE = {
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('jwt_token'))[0].accesToken
    }
  };
  const res = await fetch(`${API}/category/` + id, DELETE);
  const respond = await res.json();
  dispatch({ type: DELETE_CATEGORY, payload: respond })
};

