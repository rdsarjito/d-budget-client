import { GET_USER } from '../constants/actionTypes';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = {}, action) => {
  switch (action.type) {
    case GET_USER:
      return action.payload;
    default:
      return false;
  };
};