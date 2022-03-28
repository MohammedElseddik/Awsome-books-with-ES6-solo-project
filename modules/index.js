import Book from './Book.js';
import getTime from './date.js';

const bookListUi = document.querySelector('.book-list-ui');
const addBtn = document.getElementById('add-btn');
const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');

const listNav = document.querySelector('.list');
const addBookNav = document.querySelector('.add-list');
const contactNav = document.querySelector('.contact');
const contactSection = document.querySelector('.info-contact');

const book = new Book();

addBtn.addEventListener('click', () => {
  const contactSection = document.querySelector('.info-contact');
  if (bookTitle.value.trim() === '' || bookAuthor.value.trim() === '') {
    return;
  }
  book.addBook(bookTitle.value, bookAuthor.value);
  bookTitle.value = '';
  bookAuthor.value = '';
  addBtn.parentElement.classList.add('hidden');
  bookListUi.parentElement.classList.remove('hidden');
  contactSection.classList.add('hidden');
  book.renderBook();
});

listNav.addEventListener('click', () => {
  bookListUi.parentElement.classList.remove('hidden');
  addBtn.parentElement.classList.add('hidden');
  contactSection.classList.add('hidden');
});

addBookNav.addEventListener('click', () => {
  addBtn.parentElement.classList.remove('hidden');
  bookListUi.parentElement.classList.add('hidden');
  contactSection.classList.add('hidden');
});

contactNav.addEventListener('click', () => {
  contactSection.classList.remove('hidden');
  addBtn.parentElement.classList.add('hidden');
  bookListUi.parentElement.classList.add('hidden');
});

getTime();
setInterval(getTime, 1000);