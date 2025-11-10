let result = {};

const insertItem = (key, value) => {
  result[key] = value;
};

const deleteItem = (key) => {
  delete result[key];
};

const lookupItem = (key) => {
  if (key in result) {
    return result[key];
  }
  return 'Item does not exist';
};

const printItems = () => {
  return Object.keys(result).join(', ');
};

insertItem('hello', 'world');
insertItem('lorem', 'ipsum');
insertItem('sit', 'amet');
console.log(printItems());

console.log(lookupItem('lorem'));

deleteItem('lorem');
console.log(printItems());

console.log(lookupItem('lorem'));