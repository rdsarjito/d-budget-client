import {
  GET_INCOME,
} from './types';

export const add  = (API, format, POST) => async () => {
  await fetch(`${API}/api/${format}`, POST);
};

export const get = (API, format, GET) => async dispatch => {
  const res = await fetch(`${API}/api/${format}`, GET);
  const respond = await res.json();
  dispatch({ type: GET_INCOME, payload: respond });
};

export const del = (API, format, DELETE, id) => async () => {
  await fetch(`${API}/api/${format}/` + id, DELETE);
};