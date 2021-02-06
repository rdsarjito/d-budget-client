import { GET_USER, ADD_USER, JWT_TOKEN, PROFILE } from '../constants/actionTypes';
import { saveToLocalStorage, getLocalStorage } from '../helper';

const initialState = getLocalStorage(JWT_TOKEN);

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      state.push(action.payload);
      saveToLocalStorage(PROFILE, state);
      return state;
    case ADD_USER:
      state.push(action.payload);
      saveToLocalStorage(JWT_TOKEN, state);
      return state;
    default:
      return state;
  };
};