import refs from './refs';
const { API_KEY, BASE_URL_ALL, BASE_URL_GENRE ,cards } = refs;
export default async function fetchMovies(page = 1) {
  //Получаем все фильмы
  cards.classList.add('loader')
  try {
    const allMoviesResponse = await fetch(
      `${BASE_URL_ALL}?api_key=${API_KEY}&page=${page}`
    );
    if (!allMoviesResponse.ok) {
      throw new Error(allMoviesResponse.statusText);
    }
    const allMoviesData = await allMoviesResponse.json();

    const genreRequests = await Promise.all(
      allMoviesData.results.map(async movieId => {
        try {
          const response = await fetch(
            `${BASE_URL_GENRE}${movieId.id}?api_key=${API_KEY}&include_image_language=en,null`
          );
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          const data = await response.json();
          return data;
        } catch (error) {
          console.log('Error fetching genre information:', error);

        }
      })
    );
    cards.classList.remove('loader')
    //Возвращем все инфу по ID
    return genreRequests;
  } catch (error) {
    console.log(`Error fetching all movies:`, error);
  }
}
