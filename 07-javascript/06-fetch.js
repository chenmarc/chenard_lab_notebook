const url = 'https://anapioficeandfire.com/api/books/';

const app = document.querySelector('#books');

const addBooktoDOM = (book) => {
  let element = document.createElement('div')
  let title = document.createElement('h3')
  let author = document.createElement('p')
  let released = document.createElement('p')
  let pages = document.createElement('p')

  title.textContent = book.name;
  author.textContent = book.authors[0];
  released.textContent = book.released;
  pages.textContent = `${book.numberOfPages} pages`;
  
  element.append(title);
  element.append(author);
  element.append(released);
  element.append(pages);

  element.style.display = 'flex';
  element.style.flexDirection = 'column';
  element.style.alignItems = 'center';
  element.style.marginTop = '20px';

  app.append(element);
}

const fetchData = (url) => {
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      data.array.forEach(element => {
        console.log(book.name, book.authors[0]);

        addBooktoDOM(book);
      });
    })
    .catch((error) => {
      console.error(error);

      let element = DocumentFragment.createElement('div');
      element.textContent = 'An error occured. Please reload the page.';
      app.append(element);
    })
    .finally(() => {
      let loader = document.querySelector('#loading');
      app.removeChild(loader);
    });
};

fetchData(url)





