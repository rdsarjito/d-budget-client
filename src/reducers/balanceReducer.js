import { ADD_TRANSACTION, GET_TRANSACTIONS, DELETE_TRANSACTIONS } from '../actions/types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = [], action) => {
  let newData = '';
  
  switch (action.type) {
    case ADD_TRANSACTION:
      newData = [...state];
      newData.push(action.payload);
      return newData;
    case GET_TRANSACTIONS:
      return action.payload;
    case DELETE_TRANSACTIONS:
      newData = [...state];
      const findData = newData.findIndex(d => d.id === action.payload.id);
      if (findData > -1) {
        newData.splice(findData, 1)
      };
      return newData;
    default:
      return state;
  };
};