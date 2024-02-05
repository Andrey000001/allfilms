import refs from '../refs';

const { watchedList, watched } = refs;
const dataLocal = JSON.parse(localStorage.getItem('savedMoviesWat')) || [];
function checkSuccess(dataLocal) {
  return dataLocal
    .filter(({ isWatched, isQueue }) => isWatched || isQueue)
    .map(({ title, gotId, overage, poster_path, release_date, genres }) => {
      return `
    <li class="page-item" data-id="${gotId}">
    <a href="#" class="page-item__link">
    <img src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${title}"/>
    <div class="page-description">
    <h2 class="page-description__title">${title}</h2>
    <p class="page-description__podscription">${genres
      .map(({ name }) => name)
      .join(', ')} | <span>${release_date.slice(
        0,
        4
      )}</span> <span class="overage-modal overage">${overage}</span></p>
    </div>
    
    </a>
    </li>`;
    })
    .join(' ');
}

export function onWatchedandQueue(block) {
  watchedList.innerHTML = '';
  watchedList.insertAdjacentHTML('beforeend', checkSuccess(dataLocal));
}
onWatchedandQueue();
watched.addEventListener('click', onWatchedandQueue);
export { checkSuccess };
