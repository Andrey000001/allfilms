function e(e,t,a,o){Object.defineProperty(e,t,{get:a,set:o,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},o={},n=t.parcelRequired7c6;null==n&&((n=function(e){if(e in a)return a[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return a[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=n);var i=n.register;i("krGWQ",function(t,a){e(t.exports,"default",function(){return o});var o={API_KEY:"8c1c21cb3de0f31fcce2cce049e2c70c",BASE_URL_ALL:"https://api.themoviedb.org/3/trending/all/day",BASE_URL_GENRE:"https://api.themoviedb.org/3/movie/",BASE_URL_QUERY:"https://api.themoviedb.org/3/search/movie",cards:document.querySelector(".js-cards"),arrowRight:document.querySelector(".js-arrow-to_right"),arrowLeft:document.querySelector(".js-arrow-to_left"),formSubmit:document.querySelector(".form-page"),logo:document.querySelector(".content-header__logo"),pagination:document.querySelector(".pagination"),watchedList:document.querySelector(".js-list-watched")}}),i("9Uhgk",function(t,a){e(t.exports,"default",function(){return i});var o=n("krGWQ");function i(){window.innerWidth>767?o.default.logo.textContent="Filmoteka":o.default.logo.textContent=""}i(),window.addEventListener("resize",function(){requestAnimationFrame(i)})});var l=(n("krGWQ"),n("krGWQ"));const{API_KEY:s,BASE_URL_ALL:r,BASE_URL_GENRE:c}=l.default;async function d(e=1){let t=await fetch(`${r}?api_key=${s}&page=${e}`),a=await t.json(),o=await a.results.map(async e=>{try{let t=await fetch(`${c}${e.id}?api_key=${s}&include_image_language=en,null`);if(!t.ok)throw Error(t.statusText);return await t.json()}catch(e){console.log("Errorrrrrr",e)}});return await Promise.all(o)}var l=n("krGWQ");const{cards:u}=l.default;async function p(e){try{let t=e.filter(e=>{if(e&&null!==e.poster_path)return e}).map(({title:e,poster_path:t,genres:a,release_date:o,id:n})=>{let i=a.map(e=>e.name).join(", "),l=o.slice(0,4);return`
              <li class="page-item" data-id="${n}">
                 <a href="#" class="page-item__link">
                 <img src="https://image.tmdb.org/t/p/w500${t}">
                 <div class="page-description">
                     <h2 class="page-description__title">${e}</h2>
                     <p class="page-description__podscription">${i} <span>| ${l}</span></p>
                 </div>
                 </a>
              </li>`}).join(" ");u.insertAdjacentHTML("beforeend",t)}catch(e){console.log(e)}}var l=(n("krGWQ"),n("krGWQ"));const{cards:m}=l.default;function g(){m.innerHTML=""}var _=n("9Uhgk");const{formSubmit:f,BASE_URL_QUERY:h,API_KEY:v,BASE_URL_GENRE:y,cards:w,logo:b,pagination:$}=l.default;(0,_.default)();var l=n("krGWQ");const{API_KEY:E,BASE_URL_ALL:L,arrowRight:k,arrowLeft:S}=l.default;async function j(e=1){let t=await fetch(`${L}?api_key=${E}&page=${e}`);console.log(e);let{totalPageCount:a,currentPage:o,pageNumbers:n,maxPageBtn:i,nearEdgeThreshold:l,pageNumbersHtml:s}={totalPageCount:(await t.json()).total_pages,currentPage:e,pageNumbers:[],maxPageBtn:9,nearEdgeThreshold:3,pageNumbersHtml:document.querySelector(".js-list")};if(a<=i)for(let e=1;e<=a;e+=1)n.push(e);else if(o<=l+1){for(let e=1;e<=i-2;e+=1)n.push(e);n.push("..."),n.push(a)}else if(o>=a-l){n.push(1),n.push("...");for(let e=a-i+3;e<=a;e+=1)n.push(e)}else{n.push(1),n.push("...");for(let e=o-l;e<=o+l;e+=1)n.push(e);n.push("..."),n.push(a)}let r=n.map(t=>{if("..."===t)return`<span>${t}</span>`;{let a=e===t?"isactive":"";return`<button class="js-page-number ${a}" data-page="${t}">${t}</button>`}}).join("");s.innerHTML=r,k.disabled=e===a,S.disabled=1===e,document.querySelectorAll(".js-page-number").forEach(t=>{t.addEventListener("click",async()=>{let a=parseInt(t.dataset.page);isNaN(a)||(e=a,g(),p(await d(e)),j())})})}var l=n("krGWQ");n("krGWQ");const{BASE_URL_GENRE:R,API_KEY:A}=l.default,q=document.createElement("div");async function N(){async function e(e){let a=e.target.closest(".page-item");if(a){document.body.classList.add("modal-open");let e=a.dataset.id,o=await fetch(`${R}${e}?api_key=${A}`),n=await o.json(),{genres:i,title:l,poster_path:s,vote_average:r,vote_count:c,original_title:d,popularity:u,overview:p,release_date:m}=n,g=i.map(({name:e})=>e).join(" | "),_=r.toString().slice(0,3),f=c.toString(),h=p.length>550?p.slice(0,550)+"...":p;console.log(n),q.innerHTML="";let v=`
                  <div class="modal__container">
                    <div class="modal-contant">
                      <img src="https://image.tmdb.org/t/p/w500${s}" alt="${l}"/>
                      <article class="modal-article">
                          <h2 class="modal-article__title">${l}</h2>
                          <div class="info-modal">
                              <p class="info-modal__lean">Vote / Votes<span class="info-modal__value overage-modal">${_}</span> / <span class="vote-modal info-modal__value">${f}</span></p>
                              <p class="info-modal__lean">Popularity<span class="info-modal__value popular-modal">${function(e){let t=parseFloat(e);if(!isNaN(t)){let e=t.toFixed(1);return e.endsWith(".")?e.slice(0,-1):e.endsWith(".0")?e.slice(0,-2):e}return"Invalid value"}(u)}</span></p>
                              <p class="info-modal__lean">Original Title<span class="info-modal__value title-modal">${d}</span></p>
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
                  `;q.style.display="flex",document.body.addEventListener("click",t),q.innerHTML=v,function(e,t){e.addEventListener("click",e=>{let a=JSON.parse(localStorage.getItem("savedMovies"))||[];-1===a.findIndex(({id:e})=>e===t.id)?(a.push(t),console.log("Фильм добавлен в сохраненные"),localStorage.setItem("savedMovies",JSON.stringify(a))):console.log("Фильм уже есть")})}(document.querySelector(".js-modal__watched"),{gotId:e,poster_path:s,title:l,genres:i,overage:_,release_date:m})}}function t(e){e.target.closest(".modal-contant")||(document.body.classList.remove("modal-open"),q.style.display="none",document.body.removeEventListener("click",t))}document.body.addEventListener("click",e)}q.classList.add("modal"),document.body.appendChild(q),q.style.display="none";let x=1;const{arrowRight:G,arrowLeft:P}=l.default;!async function(){let e=await d(x);await p(e),j()}();const{handleLeftClick:U,handleRightClick:T}={handleRightClick:async()=>{x+=1;try{g();let e=await d(x);p(e),j(x)}catch(e){console.error(e)}},handleLeftClick:async()=>{x-=1;try{g();let e=await d(x);p(e),j(x)}catch(e){console.error(e)}}};P.addEventListener("click",U),G.addEventListener("click",T),f.addEventListener("submit",async e=>{e.preventDefault();let t=e.currentTarget.serchQuary.value.trim(),a=await fetch(`${h}?api_key=${v}&query=${t}`),o=await a.json(),n=await o.results.filter(e=>{if(e&&null!==e.poster_path)return e}),i=await n.map(({id:e})=>e),l=await Promise.all(i.map(async e=>{let t=await fetch(`${y}${e}?api_key=${v}`),{title:a,poster_path:o,release_date:n,genres:i}=await t.json(),l=i.map(({name:e})=>e).join(" "),s=n.slice(0,4);return`
            <li class="page-item" data-id="${e}">
                <a href="#" class="page-item__link">
                    <img class="page-item__img" src="https://image.tmdb.org/t/p/w500${o}" alt="${a}"/>
                    <div class="page-description">
                        <h2 class="page-description__title">${a}</h2>
                        <p class="page-description__podscription">${l} ${s}</p>
                    </div>
                </a>
            </li>`}));g(),$.style.display="none",w.innerHTML=l.join(" ")}),N();
//# sourceMappingURL=index.aa1e9c32.js.map
