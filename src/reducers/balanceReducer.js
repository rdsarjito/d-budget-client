import { GET_TRANSACTIONS } from '../actions/types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = [], action) => {
  switch (action.type) {
    case GET_TRANSACTIONS:
      return action.payload;
    default:
      return state;
  };
};