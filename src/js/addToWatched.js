import refs from "./refs";
export default function addMovieToWatched(watched ,localStr) {
    watched.addEventListener('click',(e) => {
        const savedMovies = JSON.parse(localStorage.getItem('savedMovies')) || [];
        const existingMovieIndex = savedMovies.findIndex(({id}) => id === localStr.id) 
        if(existingMovieIndex === -1) {
            savedMovies.push(localStr);
            console.log('Фильм добавлен в сохраненные');
            localStorage.setItem('savedMovies',JSON.stringify(savedMovies))
        }else { 
            console.log('Фильм уже есть');
        }
    })
}

