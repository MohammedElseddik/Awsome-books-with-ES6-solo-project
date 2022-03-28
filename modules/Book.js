export default class Book {
  // Creat book boject
  constructor() {
    if (localStorage.getItem('BookList') !== null) {
      this.bookObject = JSON.parse(localStorage.getItem('BookList'));
      this.renderBook();
    } else {
      this.bookObject = [];
    }
  }

  addBook(title, author) {
    this.bookObject.push({ title, author });
    localStorage.setItem('BookList', JSON.stringify(this.bookObject));
  }

  // Create a render function
  renderBook() {
    // Create the book list
    const bookListUi = document.querySelector('.book-list-ui');
    bookListUi.innerHTML = '';
    this.bookObject.forEach((bookItem, index) => {
      const listUi = document.createElement('ul');
      listUi.setAttribute('class', `list-ui ${index}`);

      const removeBtn = document.createElement('button');
      removeBtn.setAttribute('class', `remove-btn r-btn${index}`);
      removeBtn.textContent = 'Remove';
      removeBtn.addEventListener('click', (e) => { this.removeBook(e, index); });
      /* eslint-disable */
            const bookListElement = document.createElement('li');
            for (const key in bookItem) {
                bookListElement.textContent = `"${bookItem.title}" by ${bookItem.author}`;
                listUi.appendChild(bookListElement);
            }
            listUi.appendChild(removeBtn);
            bookListUi.appendChild(listUi);
        });
    }

    removeBook(event, removeBtnIndex) {
        event.target.parentElement.remove();
        this.bookObject.splice(removeBtnIndex, 1);
        this.renderBook();
        localStorage.setItem('BookList', JSON.stringify(this.bookObject));
    }

}

