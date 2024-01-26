import refs from './js/refs';
import fetchMovies from './js/fetchMovie';
import { createMarkup } from './js/createMarkup';
import searchforNameMovie from './js/serchMovie';
import updatePage from './js/plagination';
import clearPage from './js/clearPage';
import touchMovieInfo from './js/currentMuvie';
let page = 1;

const { arrowRight ,arrowLeft } = refs;

init();

async function init() {
  const data = await fetchMovies(page);
  await createMarkup(data);
  updatePage();
}

const arrows = {
  handleRightClick: async () => {
    page += 1;
    try {
      clearPage();
      const data = await fetchMovies(page);
      createMarkup(data);
      updatePage(page);
    } catch (error) {
      console.error(error);
    }
  },
  handleLeftClick: async () => {
    page -= 1;
    try {
      clearPage();
      const data = await fetchMovies(page);
      createMarkup(data);
      updatePage(page);
    } catch (error) {
      console.error(error);
    }
  },
};

const { handleLeftClick, handleRightClick } = arrows;

arrowLeft.addEventListener('click', handleLeftClick);
arrowRight.addEventListener('click', handleRightClick);

searchforNameMovie();
touchMovieInfo()

