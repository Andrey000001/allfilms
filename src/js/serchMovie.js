import refs from './refs';
import clearPage from './clearPage';
import updateText from './updateText';
const { formSubmit, BASE_URL_QUERY, API_KEY, BASE_URL_GENRE, cards ,logo ,pagination} = refs;

export default function searchforNameMovie() {
  formSubmit.addEventListener('submit', async e => {
    e.preventDefault();
    const request = e.currentTarget.serchQuary.value.trim();
    const response = await fetch(
      `${BASE_URL_QUERY}?api_key=${API_KEY}&query=${request}`
    );
    const data = await response.json();
    const successMovies = await data.results.filter((item )=>  {
        if(!item || item.poster_path === null) {
            return
        }
        return item
    })
    
    const results = await successMovies.map(({ id }) => id);

    const renderingMarkup = await Promise.all(
      results.map(async (ids) => {
        
        const response = await fetch(
          `${BASE_URL_GENRE}${ids}?api_key=${API_KEY}`
        );
        const data = await response.json();
        const { title, poster_path, release_date, genres } = data;
        const genre = genres.map(({ name }) => name).join(' ');
        const releaseDate = release_date.slice(0,4) 
        return `
            <li class="page-item" data-id="${ids}">
                <a href="#" class="page-item__link">
                    <img class="page-item__img" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${title}"/>
                    <div class="page-description">
                        <h2 class="page-description__title">${title}</h2>
                        <p class="page-description__podscription">${genre} ${releaseDate}</p>
                    </div>
                </a>
            </li>`;
      })
    );
    clearPage();
    pagination.style.display = 'none'
    cards.innerHTML = renderingMarkup.join(' ');
  });
}

updateText()
