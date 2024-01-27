export default function addMovieToWatched(watchedD ,localStr) {
    watchedD.addEventListener('click',() => {
        const isWatched = true
        localStr.isWatched = isWatched
        const savedMoviesWatched = JSON.parse(localStorage.getItem('savedMoviesWat')) || [];
        const existingMovieIndex = savedMoviesWatched.findIndex(({gotId}) => gotId === localStr.gotId)
        if(existingMovieIndex === -1) {
            savedMoviesWatched.push(localStr);
            console.log('Фильм добавлен в сохраненные');
            localStorage.setItem('savedMoviesWat',JSON.stringify(savedMoviesWatched))
        }else { 
            console.log('Фильм уже есть');
        }
    })
}


