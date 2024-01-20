const API_KEY = '8c1c21cb3de0f31fcce2cce049e2c70c';
const BASE_URL_ALL = 'https://api.themoviedb.org/3/trending/all/day';
const BASE_URL_GANRE = 'https://api.themoviedb.org/3/movie/';

createMarkup();
async function fetchMovies(page = 1) {
  const response = await fetch(`${BASE_URL_ALL}?api_key=${API_KEY}&page=${page}`);
  const data = await response.json();

  const genreRequests = await data.results.map(async movieId => {
    try {
      const resp = await fetch(
        `${BASE_URL_GANRE}${movieId.id}?api_key=${API_KEY}&include_image_language=en,null`
      );
      if (!resp.ok) {
        throw new Error(resp.statusText);
      }
      const data = await resp.json();
      return data;
    } catch (error) {
      console.log('Errorrrrrr', error);
    }
  });
  return Promise.all(genreRequests);
}

const jsCards = document.querySelector('.js-cards');

async function createMarkup() {
  try {
    const data = await fetchMovies();
    const successfulMoviesData = data.filter(movies => {
      if (!movies || movies.poster_path === null) {
        return;
      }
      return movies;
    });
    const markup = successfulMoviesData
      .map(({ title, poster_path, genres, release_date }) => {
        let genr = genres.map(item => item.name).join(', ');
        let dateMovie = release_date.slice(0, 4);

        return `
            <li class="page-item">
               <a href="#" class="page-item__link">
               <img src="https://image.tmdb.org/t/p/w500${poster_path}">
               <div class="page-description">
                   <h2 class="page-description__title">${title}</h2>
                   <p class="page-description__podscription">${genr} <span>| ${dateMovie}</span></p>
               </div>
               </a>
            </li>`;
      })
      .join(' ');
    jsCards.insertAdjacentHTML('beforeend', markup);
  } catch (error) {
    console.log(error);
  }
}
