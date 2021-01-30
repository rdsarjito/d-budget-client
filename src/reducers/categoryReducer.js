import { ADD_CATEGORY, DELETE_CATEGORY, GET_CATEGORIES } from '../actions/types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = [], action) => {
  let newData = '';

  switch (action.type) {
    case ADD_CATEGORY:
      newData = [...state];
      newData.push(action.payload);
      return newData;
    case GET_CATEGORIES:
      return action.payload;
    case DELETE_CATEGORY:
      newData =[...state];
      newData.splice(newData.findIndex(d => d._id === action.payload), 1);
      return newData;
    default:
      return state;
  };
};