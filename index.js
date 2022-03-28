const addBtn = document.getElementById('add-btn');
const bookListUi = document.querySelector('.book-list-ui');
const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');

const listNav = document.querySelector('.list');
const addBookNav = document.querySelector('.add-list');
const contactNav = document.querySelector('.contact');
const contactSection = document.querySelector('.info-contact');

class Book {
    // Creat book boject
    constructor() {
        if (localStorage.getItem('BookList') !== null) {
            this.bookObject = JSON.parse(localStorage.getItem('BookList'));
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
        bookListUi.innerHTML = '';

        this.bookObject.forEach((bookItem, index) => {
            const listUi = document.createElement('ul');
            listUi.setAttribute('class', `list-ui ${index}`);

            const removeBtn = document.createElement('button');
            removeBtn.setAttribute('class', `remove-btn r-btn${index}`);
            removeBtn.textContent = 'Remove';
            removeBtn.addEventListener('click', (e) => { this.removeBook(e, index) });
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
        console.log(event);
        console.log('helo')
        console.log(this);
        event.target.parentElement.remove();
        this.bookObject.splice(removeBtnIndex, 1);
        this.renderBook();
        setLocalStorage();
    }

}

const book = new Book();

const setLocalStorage = () => {
    localStorage.setItem('BookList', JSON.stringify(book.bookObject));
}


const getLocalStorage = () => {
    if (JSON.parse(localStorage.getItem('BookList')) !== null) {
        book.bookObject = JSON.parse(localStorage.getItem('BookList'));
        book.renderBook();
    }
}

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