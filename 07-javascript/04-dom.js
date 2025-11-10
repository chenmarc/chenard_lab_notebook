// Exercise #1:
// when the user clicks the 'copy' button, copy the user input to the output area
// fetch JavaScript objects representing specific elements in the DOM
// add an event listener on the target element
// callback function to handle event
const inputA = document.getElementById('input');
const copyButton = document.getElementById('copy');
const outputA = document.getElementById('output');
copyButton.addEventListener('click', () => {
  outputA.textContent = inputA.value;
});

// Exercise #2:
// when the user enters input text, copy the user input to the output area
// fetch JavaScript objects representing specific elements in the DOM
// add an event listener on the target element
// callback function to handle event
const inputB = document.getElementById('input');
const outputB = document.getElementById('output');
inputB.addEventListener('input', () => {
  outputB.textContent = inputB.value;
});

const destructureItems = ({ name, house, parents: { mother, father } }) => {
  return `${name} ${house}\ndaughter of\n${mother} and ${father}`;
};
console.log(destructureItems(sansa));
// Sansa Stark
// daughter of
// Catelyn Tully and Eddard Stark
console.log(destructureItems(daenerys));
// Daenerys Targaryen
// daughter of
// Queen Rhaella and King Aerys II Targaryen

fetch('https://www.anapioficeandfire.com/api/books')
  .then(response => response.json())
  .then(books => {
    const spinner = document.getElementById('spinner');
    if (spinner) spinner.style.display = 'none';
    const container = document.querySelector('.container') || document.getElementById('container');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.alignItems = 'center';
    books.forEach(book => {
      const bookDiv = document.createElement('div');
      bookDiv.innerHTML = `
        <h2>${book.name}</h2>
        <p>Author: ${book.authors.join(', ')}</p>
        <p>Publication year: ${book.released.substring(0, 4)}</p>
        <p>Number of pages: ${book.numberOfPages}</p>
      `;
      container.appendChild(bookDiv);
    });
  });

const mapNameFamily = (characters) => {
  return characters.map(({ name, house }) => `${name}, of House ${house}`);
};
const filterFamily = (characters, houseName) => {
  return characters.filter(({ house }) => house === houseName);
};
const reduceHouses = (characters) => {
  return characters.reduce((acc, { house }) => {
    acc[house] = (acc[house] || 0) + 1;
    return acc;
  }, {});
};
console.log(mapNameFamily(characters));
// [
// 'Arya, of House Stark',
// 'Sansa, of House Stark',
// 'Eddard, of House Stark',
// 'Catelyn, of House Stark',
// 'Robb, of House Stark',
// 'Rickon, of House Stark',
// 'Jaime, of House Lannister',
// ...
// ]
console.log(filterFamily(characters, 'Stark'));
// [
// { id: 1, name: 'Arya', house: 'Stark' },
// { id: 4, name: 'Sansa', house: 'Stark' },
// { id: 16, name: 'Eddard', house: 'Stark' },
// { id: 17, name: 'Catelyn', house: 'Stark' },
// { id: 20, name: 'Robb', house: 'Stark' },
// { id: 28, name: 'Rickon', house: 'Stark' }
// ]
console.log(filterFamily(characters, 'Greyjoy'));
// [
// { id: 83, name: 'Theon', house: 'Greyjoy' },
// { id: 84, name: 'Yara', house: 'Greyjoy' }
// ]
console.log(reduceHouses(characters));
// {
// Stark: 6,
// Lannister: 5,
// Targaryen: 3,
// Greyjoy: 2,
// Seaworth: 1,
// Tarth: 1
// }