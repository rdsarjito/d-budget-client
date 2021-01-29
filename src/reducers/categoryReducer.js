import { ADD_CATEGORY, GET_CATEGORIES } from '../actions/types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = [], action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      const newData = [...state];
      newData.push(action.payload);
      return newData;
    case GET_CATEGORIES:
      return action.payload;
    default:
      return state;
  };
};