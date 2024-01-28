!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},i=e.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in a){var i=a[e];delete a[e];var n={id:e,exports:{}};return t[e]=n,i.call(n.exports,n,n.exports),n.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){a[e]=t},e.parcelRequired7c6=i),i.register;var n=i("l8JbC"),r=i("4Nugj");let{watchedList:s,watched:d}=r.default,l=JSON.parse(localStorage.getItem("savedMoviesWat"))||[];function o(e){return e.filter(({isWatched:e,isQueue:t})=>e||t).map(({title:e,gotId:t,overage:a,poster_path:i,release_date:n,genres:r})=>`
    <li class="page-item" data-id="${t}">
    <a href="#" class="page-item__link">
    <img src="https://image.tmdb.org/t/p/w500${i}" alt="${e}"/>
    <div class="page-description">
    <h2 class="page-description__title">${e}</h2>
    <p class="page-description__podscription">${r.map(({name:e})=>e).join(", ")} | <span>${n.slice(0,4)}</span> <span class="overage-modal overage">${a}</span></p>
    </div>
    
    </a>
    </li>`).join(" ")}function c(){s.innerHTML="",s.insertAdjacentHTML("beforeend",o(l))}c(),d.addEventListener("click",c);var r=i("4Nugj");let{watchedList:p,queue:u}=r.default,f=JSON.parse(localStorage.getItem("savedMovieQueue"));u.addEventListener("click",()=>{p.innerHTML="",p.insertAdjacentHTML("beforeend",o(f))});var g=i("9OMvP");(0,n.default)(),(0,g.default)()}();
//# sourceMappingURL=library.acd4fe38.js.map
