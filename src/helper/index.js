export const addMoneyDots = (n) =>  {
  return n.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
};

export const removeMoneyDots = (n) =>  {
  return n.split(',').join("");
};

export const sortedDate = (arr) => arr.sort((date1,date2) => {
  const parseDate1 = new Date(date1.date);
  const parseDate2 = new Date(date2.date);
  return parseDate1.getTime() - parseDate2.getTime()
});

export const stringDate = (date) => {
  const parseToDate = new Date(date);
  return parseToDate.toLocaleDateString('en-GB', {
    month: 'long', day: '2-digit', year: 'numeric'});
};