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

export const filterArrayByObj = (arr, obj) => {
  return arr.filter(a => a.typeBalance.includes(obj));
};

export const randomArray = (items) => {
  return items[~~(items.length * Math.random())];
};

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const saveToLocalStorage = (key, items) => {
  localStorage.setItem(key, JSON.stringify(items));
};

export const getLocalStorage = (param) => {
  const storage = localStorage.getItem(param);
  if (!storage) return []
  return JSON.parse(storage);
}