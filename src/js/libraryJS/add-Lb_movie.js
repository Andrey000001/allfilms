import refs from '../refs';
const { watchedList } = refs;
const dataLocal = JSON.parse(localStorage.getItem('savedMovies')) || [];
console.log(dataLocal);

const markup = dataLocal.map(({ poster_path, gotId, title ,genres }) => {
    const ganreS = genres.map(({name}) => name).join(' | ')
    return `
    <li data-ids="${gotId}">
        <img src="https://image.tmdb.org/t/p/w500${poster_path}">
        <h2>${title}</h2>
        <p>${ganreS}</p>
    </li>`
})
watchedList.insertAdjacentHTML('beforeend',markup)

