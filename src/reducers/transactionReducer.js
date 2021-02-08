import { ADD_TRANSACTION, GET_TRANSACTIONS, DELETE_TRANSACTION, REMOVE_TRANSACTION } from '../constants/actionTypes';

// eslint-disable-next-line import/no-anonymous-default-export
export default (transactions = [], action) => {  
  switch (action.type) {
    case GET_TRANSACTIONS:
      return action.payload;
    case ADD_TRANSACTION:
      return [...transactions, action.payload];
    case DELETE_TRANSACTION:
      return transactions.filter((stat) => stat._id !== action.payload);
    case REMOVE_TRANSACTION:
      return transactions = [];
    default:
      return transactions;
  };
};