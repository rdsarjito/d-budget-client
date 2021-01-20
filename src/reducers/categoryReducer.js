import { GET_CATEGORIES } from '../actions/types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = [], action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return action.payload;
    default:
      return state;
  };
};