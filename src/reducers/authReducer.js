import { AUTH_GOOGLE, JWT_TOKEN } from '../actions/types';
import { saveToLocalStorage, getLocalStorage } from '../helper';

const initialState = getLocalStorage(JWT_TOKEN);

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH_GOOGLE:
      const newJWT = [...state]
      newJWT.push(action.payload);
      console.log(action.payload)
      saveToLocalStorage(JWT_TOKEN, newJWT);
      return action.payload.data;
    default:
      return state;
  };
};