import refs from '../refs';
import { checkSuccess } from './add-Lb_movie';
const { watchedList, queue } = refs;

const dataLocal = JSON.parse(localStorage.getItem('savedMovieQueue'));

queue.addEventListener('click', () => {
  watchedList.innerHTML = '';
  watchedList.insertAdjacentHTML('beforeend', checkSuccess(dataLocal));
});
