import refs from './refs';
import addMovieToWatched from './addToWatched';
import addToQueue from './addToQueue';
const { BASE_URL_GENRE, API_KEY, cards } = refs;

const modalContainer = document.createElement('div');
document.body.appendChild(modalContainer);
modalContainer.classList.add('modal');
modalContainer.style.display = 'none';
let isModalOpen = true;

export default async function touchMovieInfo() {
  cards.addEventListener('click', onOpenModal);
  async function onOpenModal(e) {
    const pageItem = e.target.closest('.page-item');
    if (pageItem) {
      document.body.classList.add('modal-open');
      const gotId = pageItem.dataset.id;
      try {
        cards.classList.add('loader');
        const data = await fetchData(gotId);
        cards.classList.remove('loader');
        showModal(data);
      } catch (error) {
        console.error('Error fetching movie information:', error);
      }
    }
  }
  function showModal(data) {
    const backdrop = createBackdrop(data);
    modalContainer.style.display = 'flex';
    document.body.addEventListener('click', onCloseModal);
    document.body.addEventListener('keydown', onCloseModalKey);
    modalContainer.innerHTML = backdrop;
    const modalWatched = document.querySelector('.js-modal__watched');
    const modalQueue = document.querySelector('.js-modal__queue');
    const modalButtons = document.querySelector('.modal-buttons');
    addMovieToWatched(modalWatched, createLocalStorageSave(data));
    addToQueue(modalQueue, createLocalStorageSave(data));
  }

  function onCloseModalKey(e) {
    if (e.code === 'Escape') {
      closeModal();
    }
  }

  function onCloseModal(e) {
    if (!e.target.closest('.modal-contant')) {
      closeModal();
    } else if (e.target.closest('.close')) {
      closeModal();
    }
  }
  function closeModal() {
    document.body.classList.remove('modal-open');
    modalContainer.style.display = 'none';
    document.body.removeEventListener('keydown', onCloseModal);
    document.body.removeEventListener('click', onCloseModal);
  }

  async function fetchData(id) {
    return fetch(`${BASE_URL_GENRE}${id}?api_key=${API_KEY}`).then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    });
  }
  function createBackdrop(data) {
    const {
      title,
      poster_path,
      vote_average,
      vote_count,
      original_title,
      popularity,
      overview,
    } = data;
    function checkCorect(num) {
      const parseValue = parseFloat(num);
      if (!isNaN(parseValue)) {
        const popular = parseValue.toFixed(1);
        if (popular.endsWith('.')) {
          return popular.slice(0, -1);
        } else if (popular.endsWith('.0')) {
          return popular.slice(0, -2);
        }
        return popular;
      }
      return 'Invalid value';
    }

    const genres = data.genres.map(({ name }) => name).join(' | ');
    const overage = vote_average.toString().slice(0, 3);
    const overviwW =
      overview.length > 550 ? overview.slice(0, 550) + '...' : overview;
    const svgElement = isModalOpen
      ? '<svg class="close" width="30" height="30" xmlns="http://www.w3.org/2000/svg"><line x1="5" y1="5" x2="25" y2="25" stroke="black" stroke-width="2" class="cross-line"/><line x1="5" y1="25" x2="25" y2="5" stroke="black" stroke-width="2" class="cross-line"/></svg>'
      : '';
    return `
      <div class="modal__container">
        <div class="modal-contant" isModalOpen>
        <button class="modal-closeBtn">${svgElement}</button>
        <img src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${title}"/>
          <article class="modal-article">
            <h2 class="modal-article__title">${title}</h2>
            <div class="info-modal">
              <p class="info-modal__lean">Vote / Votes<span class="info-modal__value overage-modal">${overage}</span> / <span class="vote-modal info-modal__value">${vote_count}</span></p>
              <p class="info-modal__lean">Popularity<span class="info-modal__value popular-modal">${checkCorect(
                popularity
              )}</span></p>
              <p class="info-modal__lean">Original Title<span class="info-modal__value title-modal">${original_title}</span></p>
              <p class="info-modal__lean">Genre<span class="info-modal__value genre-modal">${genres}</span></p>
              <div>
                <p class="info-modal__about">About</p>
                <p class="info-modal__overview">${overviwW}</p>
              </div>
            </div>
             <div class="modal-buttons">
              <button class="modal-buttons__watched modal-button js-modal__watched">add to Watched</button>
              <button class="modal-buttons__queue modal-button js-modal__queue">add to queue</button>
            </div>
          </article>
        </div>
      </div>
    `;
  }

  function createLocalStorageSave(data) {
    const { id, poster_path, title, genres, vote_average, release_date } = data;

    return {
      gotId: id,
      poster_path,
      title,
      genres,
      overage: vote_average.toString().slice(0, 3),
      release_date,
    };
  }
}
