!function(){function e(e,t,o,r){Object.defineProperty(e,t,{get:o,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},n=t.parcelRequired7c6;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequired7c6=n);var a=n.register;a("l8JbC",function(t,o){e(t.exports,"default",function(){return a});var r=n("4Nugj");function a(){window.innerWidth>767?r.default.logo.textContent="Filmoteka":r.default.logo.textContent=""}a(),window.addEventListener("resize",function(){requestAnimationFrame(a)})}),a("4Nugj",function(t,o){e(t.exports,"default",function(){return r});var r={API_KEY:"8c1c21cb3de0f31fcce2cce049e2c70c",BASE_URL_ALL:"https://api.themoviedb.org/3/trending/all/day",BASE_URL_GENRE:"https://api.themoviedb.org/3/movie/",BASE_URL_QUERY:"https://api.themoviedb.org/3/search/movie",cards:document.querySelector(".js-cards"),arrowRight:document.querySelector(".js-arrow-to_right"),arrowLeft:document.querySelector(".js-arrow-to_left"),formSubmit:document.querySelector(".form-page"),logo:document.querySelector(".content-header__logo"),pagination:document.querySelector(".pagination"),watchedList:document.querySelector(".js-list-watched"),watched:document.getElementById("watched"),queue:document.getElementById("queue")}});var i=n("l8JbC"),d=n("4Nugj");let{watchedList:c,watched:l}=d.default,s=JSON.parse(localStorage.getItem("savedMoviesWat"))||[];function u(e){return e.filter(({isWatched:e,isQueue:t})=>e||t).map(({title:e,gotId:t,overage:o,poster_path:r,release_date:n,genres:a})=>`
    <li class="page-item" data-id="${t}">
    <a href="#" class="page-item__link">
    <img src="https://image.tmdb.org/t/p/w500${r}" alt="${e}"/>
    <div class="page-description">
    <h2 class="page-description__title">${e}</h2>
    <p class="page-description__podscription">${a.map(({name:e})=>e).join(", ")} | <span>${n.slice(0,4)}</span> <span class="overage-modal overage">${o}</span></p>
    </div>
    
    </a>
    </li>`).join(" ")}function p(){c.innerHTML="",c.insertAdjacentHTML("beforeend",u(s))}document.querySelector(".page-item"),p(),l.addEventListener("click",p);var d=n("4Nugj");let{watchedList:g,queue:f}=d.default,m=JSON.parse(localStorage.getItem("savedMovieQueue"));f.addEventListener("click",()=>{g.innerHTML="",g.insertAdjacentHTML("beforeend",u(m))}),(0,i.default)()}();
//# sourceMappingURL=library.7a3ba91e.js.map
