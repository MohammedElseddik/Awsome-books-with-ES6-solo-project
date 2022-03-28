import Book from './Book.js';
import getTime from './date.js';
import { listNavFun, addBookNavFun, contactSectionFun } from './navigation-bar.js';

const bookListUi = document.querySelector('.book-list-ui');
const addBtn = document.getElementById('add-btn');
const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');

const book = new Book();

addBtn.addEventListener('click', () => {
  if (bookTitle.value.trim() === '' || bookAuthor.value.trim() === '') {
    return;
  }
  book.addBook(bookTitle.value, bookAuthor.value);
  bookTitle.value = '';
  bookAuthor.value = '';
  addBtn.parentElement.classList.add('hidden');
  bookListUi.parentElement.classList.remove('hidden');
  book.renderBook();
});

listNavFun(addBtn, bookListUi);
addBookNavFun(addBtn, bookListUi);
contactSectionFun(addBtn, bookListUi);
getTime();
setInterval(getTime, 1000);