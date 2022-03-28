const listNav = document.querySelector('.list');
const addBookNav = document.querySelector('.add-list');
const contactNav = document.querySelector('.contact');
const contactSection = document.querySelector('.info-contact');

const listNavFun = (addBtn, bookListUi) => {
  listNav.addEventListener('click', () => {
    addBtn.parentElement.classList.add('hidden');
    bookListUi.parentElement.classList.remove('hidden');
    contactSection.classList.add('hidden');
  });
};

const addBookNavFun = (addBtn, bookListUi) => {
  addBookNav.addEventListener('click', () => {
    addBtn.parentElement.classList.remove('hidden');
    bookListUi.parentElement.classList.add('hidden');
    contactSection.classList.add('hidden');
  });
};

const contactSectionFun = (addBtn, bookListUi) => {
  contactNav.addEventListener('click', () => {
    addBtn.parentElement.classList.add('hidden');
    bookListUi.parentElement.classList.add('hidden');
    contactSection.classList.remove('hidden');
  });
};

export { listNavFun, addBookNavFun, contactSectionFun };