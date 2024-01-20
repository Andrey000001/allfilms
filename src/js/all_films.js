





































// async function fetchAllRange() {
//   const resp = await fetch(`${BASE_URL_ALL}?api_key=${API_KEY}`);
//   const data = await resp.json();

//   const allRange = data.results.map(movie => movie.id);

//   const moviesAndGenresPromises = allRange.map(async movieId => {
//     try {
//       const resp = await fetch(
//         `${BASE_URL_GENRE}${movieId}?api_key=${API_KEY}`
//       );
//       if (!resp.ok) {
//         throw new Error(resp.status);
//       }
//       const data = await resp.json();
//       return data;
//     } catch (error) {
//       console.error(`Ошибка при запросе данных для фильма ${movieId}:`, error);
//     }
//   });

//   return Promise.all(moviesAndGenresPromises);
// }

// async function create() {
//   try {
//     const moviesAndGenresData = await fetchAllRange();

//     // Фильтруем только успешные запросы (статус 200)
//     const successfulMoviesData = moviesAndGenresData.filter(
//       ({ error ,poster_path }) => !error && poster_path
//     );
//     // Создаем разметку для успешных фильмов
//     const successfulMoviesMarkup = successfulMoviesData
//       .map(({ title, poster_path ,genres}) => {
//         const genresString = genres.map(gen => gen.name).join(', ')
//         return `
//         <li><h2>${title}</h2>
//         <img src="https://image.tmdb.org/t/p/w500${poster_path}">
//         <p>${genresString}</p></li>`
//       }).join(' ')
//     // Вставляем разметку в элемент с классом 'js-cards'
//     cards.insertAdjacentHTML('beforeend', successfulMoviesMarkup);
//   } catch (error) {
//     console.error('Ошибка при выполнении create:', error);
//   }
// }

// create();
