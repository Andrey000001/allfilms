import refs from "./refs";
const { cards } = refs;
  async function createMarkup(data) {
    try {
      //Отбираем те в которых есть фото и нет ошибки
      const successfulMoviesData = data.filter(movies => {
        if (!movies || movies.poster_path === null) {
          return;
        }
        return movies;
      });

      const markup = successfulMoviesData
        .map(({ title, poster_path, genres, release_date ,id}) => {
          let genr = genres.map(item => item.name).join(', ');
          let dateMovie = release_date.slice(0, 4);
  
          return `
              <li class="page-item" data-id="${id}">
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
      cards.insertAdjacentHTML('beforeend', markup);
    } catch (error) {
      console.log(error);
    }
  }
  export {createMarkup}