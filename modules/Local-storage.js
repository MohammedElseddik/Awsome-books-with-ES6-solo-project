export { setLocalStorage, getLocalStorage };
import { book } from './index.js';

const setLocalStorage = () => {
    localStorage.setItem('BookList', JSON.stringify(book.bookObject));
}

const getLocalStorage = () => {
    if (JSON.parse(localStorage.getItem('BookList')) !== null) {
        book.bookObject = JSON.parse(localStorage.getItem('BookList'));
        book.renderBook();
    }
}
