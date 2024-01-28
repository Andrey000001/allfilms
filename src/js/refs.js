export default {
    //API
    API_KEY: '8c1c21cb3de0f31fcce2cce049e2c70c',
    BASE_URL_ALL: 'https://api.themoviedb.org/3/trending/all/day',
    BASE_URL_GENRE: 'https://api.themoviedb.org/3/movie/',
    BASE_URL_QUERY: 'https://api.themoviedb.org/3/search/movie',
    
    //main
    cards: document.querySelector('.js-cards'),
    arrowRight: document.querySelector('.js-arrow-to_right'),
    arrowLeft: document.querySelector('.js-arrow-to_left'),
    formSubmit: document.querySelector('.form-page'),
    logo: document.querySelector('.content-header__logo'),
    pagination: document.querySelector('.pagination'),
    //btn
    watchedList: document.querySelector('.js-list-watched'),
    watched: document.getElementById('watched'),
    queue: document.getElementById('queue'),
    pageEl: document.querySelector('.page'),
    pageItem: document.querySelector('.page-item')
}
