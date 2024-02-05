import { Notify } from 'notiflix';
export default function addMovieToWatched(watchedD, localStr) {
  watchedD.addEventListener('click', () => {
    const isWatched = true;
    localStr.isWatched = isWatched;
    const savedMoviesWatched =
      JSON.parse(localStorage.getItem('savedMoviesWat')) || [];

    const existingMovieInQueue = JSON.parse(
      localStorage.getItem('savedMovieQueue')
    ).some(({ gotId }) => gotId === localStr.gotId);

    if (!existingMovieInQueue) {
      const existingMovieIndex = savedMoviesWatched.findIndex(
        ({ gotId }) => gotId === localStr.gotId
      );

      if (existingMovieIndex === -1) {
        savedMoviesWatched.push(localStr);
        Notify.success('Added to library watched');
        localStorage.setItem(
          'savedMoviesWat',
          JSON.stringify(savedMoviesWatched)
        );
      } else {
        Notify.info('Already added to Queue');
      }
    } else {
      Notify.info('Already added to Watched');
    }
  });
}
