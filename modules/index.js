export { addBtn, bookListUi };
import { setLocalStorage, getLocalStorage } from "./Local-storage.js";
import { Book } from "./Book.js";
import { contactSection } from "./navigation-bar.js";

const bookListUi = document.querySelector('.book-list-ui');
const addBtn = document.getElementById('add-btn');
const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');

export const book = new Book();

const getTime = () => {
    const dateDiv = document.querySelector(".date");
    dateDiv.textContent = luxon.DateTime.now().toLocaleString({
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hours: 'false'
    });
}
getTime();
setInterval(getTime, 1000);

addBtn.addEventListener('click', () => {
    if (bookTitle.value.trim() === '' || bookAuthor.value.trim() === '') {
        return;
    }
    book.addBook(bookTitle.value, bookAuthor.value);
    bookTitle.value = "";
    bookAuthor.value = "";
    addBtn.parentElement.classList.add('hidden');
    bookListUi.parentElement.classList.remove('hidden');
    contactSection.classList.add('hidden');
    book.renderBook();
});

document.addEventListener('DOMContentLoaded', getLocalStorage);