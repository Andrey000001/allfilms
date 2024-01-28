import { Notify } from "notiflix";
export default function addMovieToWatched(watchedD ,localStr) {
    watchedD.addEventListener('click',() => {
        const isWatched = true
        localStr.isWatched = isWatched
        const savedMoviesWatched = JSON.parse(localStorage.getItem('savedMoviesWat')) || [];
        const existingMovieIndex = savedMoviesWatched.findIndex(({gotId}) => gotId === localStr.gotId)
        if(existingMovieIndex === -1) {
            savedMoviesWatched.push(localStr);
            Notify.success('Added to library looked');
            localStorage.setItem('savedMoviesWat',JSON.stringify(savedMoviesWatched))
        }else { 
            Notify.info('Already added');
        }
    })
}
