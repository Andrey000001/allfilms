!function(){function e(e,t,a,o){Object.defineProperty(e,t,{get:a,set:o,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},o={},n=t.parcelRequired7c6;null==n&&((n=function(e){if(e in a)return a[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return a[e]=n,t.call(n.exports,n,n.exports),n.exports}var l=Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){o[e]=t},t.parcelRequired7c6=n);var l=n.register;l("4Nugj",function(t,a){e(t.exports,"default",function(){return o});var o={API_KEY:"8c1c21cb3de0f31fcce2cce049e2c70c",BASE_URL_ALL:"https://api.themoviedb.org/3/trending/all/day",BASE_URL_GENRE:"https://api.themoviedb.org/3/movie/",BASE_URL_QUERY:"https://api.themoviedb.org/3/search/movie",cards:document.querySelector(".js-cards"),arrowRight:document.querySelector(".js-arrow-to_right"),arrowLeft:document.querySelector(".js-arrow-to_left"),formSubmit:document.querySelector(".form-page"),logo:document.querySelector(".content-header__logo"),pagination:document.querySelector(".pagination"),watchedList:document.querySelector(".js-list-watched")}}),l("l8JbC",function(t,a){e(t.exports,"default",function(){return l});var o=n("4Nugj");function l(){window.innerWidth>767?o.default.logo.textContent="Filmoteka":o.default.logo.textContent=""}l(),window.addEventListener("resize",function(){requestAnimationFrame(l)})});var i=(n("4Nugj"),n("4Nugj"));let{API_KEY:s,BASE_URL_ALL:r,BASE_URL_GENRE:d}=i.default;async function c(e=1){let t=await fetch(`${r}?api_key=${s}&page=${e}`),a=await t.json(),o=await a.results.map(async e=>{try{let t=await fetch(`${d}${e.id}?api_key=${s}&include_image_language=en,null`);if(!t.ok)throw Error(t.statusText);return await t.json()}catch(e){console.log("Errorrrrrr",e)}});return await Promise.all(o)}var i=n("4Nugj");let{cards:u}=i.default;async function p(e){try{let t=e.filter(e=>{if(e&&null!==e.poster_path)return e}).map(({title:e,poster_path:t,genres:a,release_date:o,id:n})=>{let l=a.map(e=>e.name).join(", "),i=o.slice(0,4);return`
              <li class="page-item" data-id="${n}">
                 <a href="#" class="page-item__link">
                 <img src="https://image.tmdb.org/t/p/w500${t}">
                 <div class="page-description">
                     <h2 class="page-description__title">${e}</h2>
                     <p class="page-description__podscription">${l} <span>| ${i}</span></p>
                 </div>
                 </a>
              </li>`}).join(" ");u.insertAdjacentHTML("beforeend",t)}catch(e){console.log(e)}}var i=(n("4Nugj"),n("4Nugj"));let{cards:m}=i.default;function g(){m.innerHTML=""}var f=n("l8JbC");let{formSubmit:_,BASE_URL_QUERY:h,API_KEY:v,BASE_URL_GENRE:y,cards:w,logo:b,pagination:$}=i.default;(0,f.default)();var i=n("4Nugj");let{API_KEY:E,BASE_URL_ALL:L,arrowRight:j,arrowLeft:S}=i.default;async function N(e=1){let t=await fetch(`${L}?api_key=${E}&page=${e}`);console.log(e);let{totalPageCount:a,currentPage:o,pageNumbers:n,maxPageBtn:l,nearEdgeThreshold:i,pageNumbersHtml:s}={totalPageCount:(await t.json()).total_pages,currentPage:e,pageNumbers:[],maxPageBtn:9,nearEdgeThreshold:3,pageNumbersHtml:document.querySelector(".js-list")};if(a<=l)for(let e=1;e<=a;e+=1)n.push(e);else if(o<=i+1){for(let e=1;e<=l-2;e+=1)n.push(e);n.push("..."),n.push(a)}else if(o>=a-i){n.push(1),n.push("...");for(let e=a-l+3;e<=a;e+=1)n.push(e)}else{n.push(1),n.push("...");for(let e=o-i;e<=o+i;e+=1)n.push(e);n.push("..."),n.push(a)}let r=n.map(t=>{if("..."===t)return`<span>${t}</span>`;{let a=e===t?"isactive":"";return`<button class="js-page-number ${a}" data-page="${t}">${t}</button>`}}).join("");s.innerHTML=r,j.disabled=e===a,S.disabled=1===e,document.querySelectorAll(".js-page-number").forEach(t=>{t.addEventListener("click",async()=>{let a=parseInt(t.dataset.page);isNaN(a)||(e=a,g(),p(await c(e)),N())})})}var i=n("4Nugj");n("4Nugj");let{BASE_URL_GENRE:R,API_KEY:k}=i.default,A=document.createElement("div");async function q(){async function e(e){let a=e.target.closest(".page-item");if(a){document.body.classList.add("modal-open");let e=a.dataset.id,o=await fetch(`${R}${e}?api_key=${k}`),n=await o.json(),{genres:l,title:i,poster_path:s,vote_average:r,vote_count:d,original_title:c,popularity:u,overview:p,release_date:m}=n,g=l.map(({name:e})=>e).join(" | "),f=r.toString().slice(0,3),_=d.toString(),h=p.length>550?p.slice(0,550)+"...":p;console.log(n),A.innerHTML="";let v=`
                  <div class="modal__container">
                    <div class="modal-contant">
                      <img src="https://image.tmdb.org/t/p/w500${s}" alt="${i}"/>
                      <article class="modal-article">
                          <h2 class="modal-article__title">${i}</h2>
                          <div class="info-modal">
                              <p class="info-modal__lean">Vote / Votes<span class="info-modal__value overage-modal">${f}</span> / <span class="vote-modal info-modal__value">${_}</span></p>
                              <p class="info-modal__lean">Popularity<span class="info-modal__value popular-modal">${function(e){let t=parseFloat(e);if(!isNaN(t)){let e=t.toFixed(1);return e.endsWith(".")?e.slice(0,-1):e.endsWith(".0")?e.slice(0,-2):e}return"Invalid value"}(u)}</span></p>
                              <p class="info-modal__lean">Original Title<span class="info-modal__value title-modal">${c}</span></p>
                              <p class="info-modal__lean">Genre<span class="info-modal__value genre-modal">${g}</span></p>

                              <div>
                                <p class="info-modal__about">About</\u{437}>
                                <p class="info-modal__overview">${h}</p>
                              </div>
                          </div>
                          <div class="modal-buttons">
                           <button class="modal-buttons__watched modal-button js-modal__watched">add to Watched</button>
                          <button class="modal-buttons__queue modal-button">add   to queue</button>
                          </div>
                      </article>
                     </div>
                  </div>
                  `;A.style.display="flex",document.body.addEventListener("click",t),A.innerHTML=v,function(e,t){e.addEventListener("click",e=>{let a=JSON.parse(localStorage.getItem("savedMovies"))||[];-1===a.findIndex(({id:e})=>e===t.id)?(a.push(t),console.log("Фильм добавлен в сохраненные"),localStorage.setItem("savedMovies",JSON.stringify(a))):console.log("Фильм уже есть")})}(document.querySelector(".js-modal__watched"),{gotId:e,poster_path:s,title:i,genres:l,overage:f,release_date:m})}}function t(e){e.target.closest(".modal-contant")||(document.body.classList.remove("modal-open"),A.style.display="none",document.body.removeEventListener("click",t))}document.body.addEventListener("click",e)}A.classList.add("modal"),document.body.appendChild(A),A.style.display="none";let x=1,{arrowRight:P,arrowLeft:T}=i.default;!async function(){let e=await c(x);await p(e),N()}();let{handleLeftClick:U,handleRightClick:C}={handleRightClick:async()=>{x+=1;try{g();let e=await c(x);p(e),N(x)}catch(e){console.error(e)}},handleLeftClick:async()=>{x-=1;try{g();let e=await c(x);p(e),N(x)}catch(e){console.error(e)}}};T.addEventListener("click",U),P.addEventListener("click",C),_.addEventListener("submit",async e=>{e.preventDefault();let t=e.currentTarget.serchQuary.value.trim(),a=await fetch(`${h}?api_key=${v}&query=${t}`),o=await a.json(),n=await o.results.filter(e=>{if(e&&null!==e.poster_path)return e}),l=await n.map(({id:e})=>e),i=await Promise.all(l.map(async e=>{let t=await fetch(`${y}${e}?api_key=${v}`),{title:a,poster_path:o,release_date:n,genres:l}=await t.json(),i=l.map(({name:e})=>e).join(" "),s=n.slice(0,4);return`
            <li class="page-item" data-id="${e}">
                <a href="#" class="page-item__link">
                    <img class="page-item__img" src="https://image.tmdb.org/t/p/w500${o}" alt="${a}"/>
                    <div class="page-description">
                        <h2 class="page-description__title">${a}</h2>
                        <p class="page-description__podscription">${i} ${s}</p>
                    </div>
                </a>
            </li>`}));g(),$.style.display="none",w.innerHTML=i.join(" ")}),q()}();
//# sourceMappingURL=index.63bfc9e1.js.map
