import { ADD_TRANSACTIONS, GET_TRANSACTIONS } from '../actions/types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = [], action) => {
  switch (action.type) {
    case GET_TRANSACTIONS:
      state = action.payload;
      return action.payload;
    case ADD_TRANSACTIONS:
      const newData = [...state];
      newData.push(action.payload);
      return newData;
    default:
      return state;
  };
};