import { Notify } from 'notiflix';

export default function addToQueue(btnQueue, localStr) {
  btnQueue.addEventListener('click', () => {
    const isQueue = true;
    localStr.isQueue = isQueue;
    const savedMovieQueue =
      JSON.parse(localStorage.getItem('savedMovieQueue')) || [];

    const savedMoviesWat =
      JSON.parse(localStorage.getItem('savedMoviesWat')) || [];
    const existingMovieInWatched = savedMoviesWat.some(
      ({ gotId }) => gotId === localStr.gotId
    );

    if (!existingMovieInWatched) {
      if (savedMovieQueue && Array.isArray(savedMovieQueue)) {
        const existingMovieIndex = savedMovieQueue.findIndex(
          ({ gotId }) => gotId === localStr.gotId
        );

        if (existingMovieIndex === -1) {
          savedMovieQueue.push(localStr);
          Notify.success('Added to library queue');
          localStorage.setItem(
            'savedMovieQueue',
            JSON.stringify(savedMovieQueue)
          );
        } else {
          Notify.info('Already added to Watched');
        }
      } else {
        Notify.info('Error accessing Queue data');
      }
    } else {
      Notify.info('Already added to Queue');
    }
  });
}
