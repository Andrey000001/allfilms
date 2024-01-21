import refs from "./refs";
const { API_KEY, BASE_URL_ALL, BASE_URL_GENRE,} =
  refs;
export default async function fetchMovies(page = 1) {
    //Получаем все фильмы 
  const response = await fetch(
    `${BASE_URL_ALL}?api_key=${API_KEY}&page=${page}`
  );
  const data = await response.json();

  const genreRequests = await data.results.map(async movieId => {
      try {
          //Получаем все инфу по ID
      const resp = await fetch(
        `${BASE_URL_GENRE}${movieId.id}?api_key=${API_KEY}&include_image_language=en,null`
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
  return await Promise.all(genreRequests);
}