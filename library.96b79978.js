var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},i=e.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in a){var i=a[e];delete a[e];var r={id:e,exports:{}};return t[e]=r,i.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){a[e]=t},e.parcelRequired7c6=i),i.register;var r=i("9Uhgk"),n=i("krGWQ");const{watchedList:s,watched:o}=n.default,d=JSON.parse(localStorage.getItem("savedMoviesWat"))||[];function l(e){return e.filter(({isWatched:e,isQueue:t})=>e||t).map(({title:e,gotId:t,overage:a,poster_path:i,release_date:r,genres:n})=>`
    <li class="page-item" data-id="${t}">
    <a href="#" class="page-item__link">
    <img src="https://image.tmdb.org/t/p/w500${i}" alt="${e}"/>
    <div class="page-description">
    <h2 class="page-description__title">${e}</h2>
    <p class="page-description__podscription">${n.map(({name:e})=>e).join(", ")} | <span>${r.slice(0,4)}</span> <span class="overage-modal overage">${a}</span></p>
    </div>
    
    </a>
    </li>`).join(" ")}function c(){s.innerHTML="",s.insertAdjacentHTML("beforeend",l(d))}c(),o.addEventListener("click",c);var n=i("krGWQ");const{watchedList:p,queue:f}=n.default,u=JSON.parse(localStorage.getItem("savedMovieQueue"));f.addEventListener("click",()=>{p.innerHTML="",p.insertAdjacentHTML("beforeend",l(u))});var g=i("4aAp5");(0,r.default)(),(0,g.default)();
//# sourceMappingURL=library.96b79978.js.map
