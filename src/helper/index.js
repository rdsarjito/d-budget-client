export const addMoneyDots = (n) =>  {
  return n.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
};

export const removeMoneyDots = (n) =>  {
  return n.split(',').join("");
};