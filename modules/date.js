import { DateTime } from './luxon.js';

const getTime = () => {
  const dateDiv = document.querySelector('.date');
  dateDiv.textContent = DateTime.now().toLocaleString({
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hours: 'false',
  });
};

export default getTime;