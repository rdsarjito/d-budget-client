import {
  STORE_INCOME,
} from './types';

export const storeIncome = (API, obj) => async dispatch => {
  const res = await fetch(`${API}/api/income`, obj);
  const respond = await res.json();
  dispatch({ type: STORE_INCOME, payload: respond });
};