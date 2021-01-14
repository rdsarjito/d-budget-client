
export default (state = [], action) => {
  switch (action.type) {
    case 'test':
      return action.payload || [];
    default:
      return state;
  }
}