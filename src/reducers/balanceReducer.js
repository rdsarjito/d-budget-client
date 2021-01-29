import { ADD_TRANSACTION, GET_TRANSACTIONS } from '../actions/types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = [], action) => {
  switch (action.type) {
    case ADD_TRANSACTION:
      const newData = [...state];
      newData.push(action.payload);
      return newData;
    case GET_TRANSACTIONS:
      return action.payload;
    default:
      return state;
  };
};