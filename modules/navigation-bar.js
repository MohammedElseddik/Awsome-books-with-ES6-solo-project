import { addBtn, bookListUi } from './index.js';

const listNav = document.querySelector('.list');
const addBookNav = document.querySelector('.add-list');
const contactNav = document.querySelector('.contact');
export const contactSection = document.querySelector('.info-contact');

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