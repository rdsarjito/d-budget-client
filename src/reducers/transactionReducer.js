import { ADD_TRANSACTION, GET_TRANSACTIONS, DELETE_TRANSACTION } from '../actions/types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (transactions = [], action) => {  
  switch (action.type) {
    case GET_TRANSACTIONS:
      return action.payload;
    case ADD_TRANSACTION:
      return [...transactions, action.payload];
    case DELETE_TRANSACTION:
      return transactions.filter((stat) => stat._id !== action.payload);
    default:
      return transactions;
  };
};