function e(e,t,a,n){Object.defineProperty(e,t,{get:a,set:n,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in a)return a[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return a[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o);var i=o.register;i("krGWQ",function(t,a){e(t.exports,"default",function(){return n});var n={API_KEY:"8c1c21cb3de0f31fcce2cce049e2c70c",BASE_URL_ALL:"https://api.themoviedb.org/3/trending/all/day",BASE_URL_GENRE:"https://api.themoviedb.org/3/movie/",BASE_URL_QUERY:"https://api.themoviedb.org/3/search/movie",cards:document.querySelector(".js-cards"),arrowRight:document.querySelector(".js-arrow-to_right"),arrowLeft:document.querySelector(".js-arrow-to_left"),formSubmit:document.querySelector(".form-page"),logo:document.querySelector(".content-header__logo"),pagination:document.querySelector(".pagination")}}),i("9Uhgk",function(t,a){e(t.exports,"default",function(){return i});var n=o("krGWQ");function i(){window.innerWidth>767?n.default.logo.textContent="Filmoteka":n.default.logo.textContent=""}i(),window.addEventListener("resize",function(){requestAnimationFrame(i)})});var l=(o("krGWQ"),o("krGWQ"));const{API_KEY:s,BASE_URL_ALL:r,BASE_URL_GENRE:c}=l.default;async function d(e=1){let t=await fetch(`${r}?api_key=${s}&page=${e}`),a=await t.json(),n=await a.results.map(async e=>{try{let t=await fetch(`${c}${e.id}?api_key=${s}&include_image_language=en,null`);if(!t.ok)throw Error(t.statusText);return await t.json()}catch(e){console.log("Errorrrrrr",e)}});return await Promise.all(n)}var l=o("krGWQ");const{cards:u}=l.default;async function p(e){try{let t=e.filter(e=>{if(e&&null!==e.poster_path)return e}).map(({title:e,poster_path:t,genres:a,release_date:n,id:o})=>{let i=a.map(e=>e.name).join(", "),l=n.slice(0,4);return`
              <li class="page-item" data-id="${o}">
                 <a href="#" class="page-item__link">
                 <img src="https://image.tmdb.org/t/p/w500${t}">
                 <div class="page-description">
                     <h2 class="page-description__title">${e}</h2>
                     <p class="page-description__podscription">${i} <span>| ${l}</span></p>
                 </div>
                 </a>
              </li>`}).join(" ");u.insertAdjacentHTML("beforeend",t)}catch(e){console.log(e)}}var l=(o("krGWQ"),o("krGWQ"));const{cards:m}=l.default;function f(){m.innerHTML=""}var _=o("9Uhgk");const{formSubmit:g,BASE_URL_QUERY:h,API_KEY:v,BASE_URL_GENRE:y,cards:b,logo:w,pagination:$}=l.default;(0,_.default)();var l=o("krGWQ");const{API_KEY:E,BASE_URL_ALL:L,arrowRight:k,arrowLeft:R}=l.default;async function S(e=1){let t=await fetch(`${L}?api_key=${E}&page=${e}`);console.log(e);let{totalPageCount:a,currentPage:n,pageNumbers:o,maxPageBtn:i,nearEdgeThreshold:l,pageNumbersHtml:s}={totalPageCount:(await t.json()).total_pages,currentPage:e,pageNumbers:[],maxPageBtn:9,nearEdgeThreshold:3,pageNumbersHtml:document.querySelector(".js-list")};if(a<=i)for(let e=1;e<=a;e+=1)o.push(e);else if(n<=l+1){for(let e=1;e<=i-2;e+=1)o.push(e);o.push("..."),o.push(a)}else if(n>=a-l){o.push(1),o.push("...");for(let e=a-i+3;e<=a;e+=1)o.push(e)}else{o.push(1),o.push("...");for(let e=n-l;e<=n+l;e+=1)o.push(e);o.push("..."),o.push(a)}let r=o.map(t=>{if("..."===t)return`<span>${t}</span>`;{let a=e===t?"isactive":"";return`<button class="js-page-number ${a}" data-page="${t}">${t}</button>`}}).join("");s.innerHTML=r,k.disabled=e===a,R.disabled=1===e,document.querySelectorAll(".js-page-number").forEach(t=>{t.addEventListener("click",async()=>{let a=parseInt(t.dataset.page);isNaN(a)||(e=a,f(),p(await d(e)),S())})})}var l=o("krGWQ");const{BASE_URL_GENRE:A,API_KEY:j}=l.default,P=document.createElement("div");async function U(){async function e(e){let a=e.target.closest(".page-item");if(a){document.body.classList.add("modal-open");let e=a.dataset.id,n=await fetch(`${A}${e}?api_key=${j}`),o=await n.json();console.log(o);let{genres:i,title:l,poster_path:s,vote_average:r,vote_count:c,original_title:d,popularity:u,overview:p}=o,m=i.map(({name:e})=>e).join(" | "),f=r.toString().slice(0,3),_=c.toString(),g=p.length>350?p.slice(0,350)+"...":p;P.innerHTML="";let h=`
                  <div class="modal__container">
                    <div class="modal-contant">
                    <img src="https://image.tmdb.org/t/p/w500${s}" alt="${l}"/>
                    <article class="modal-article">
                         <h2 class="modal-article__title">${l}</h2>
                        <div class="info-modal">
                        
                            <p class="info-modal__lean">Vote / Votes<span class="info-modal__value overage-modal">${f}</span> / <span class="vote-modal info-modal__value">${_}</span></p>
                            <p class="info-modal__lean">Popularity<span class="info-modal__value popular-modal">${function(e){let t=parseFloat(e);if(!isNaN(t)){let e=t.toFixed(1);return e.endsWith(".")?e.slice(0,-1):e.endsWith(".0")?e.slice(0,-2):e}return"Invalid value"}(u)}</span></p>
                            <p class="info-modal__lean">Original Title<span class="info-modal__value title-modal">${d}</span></p>
                            <p class="info-modal__lean">Genre<span class="info-modal__value genre-modal">${m}</span></p>
                        </div>
                        <p class="info-modal__about">About</\u{437}>
                        <p class="info-modal__overview">${g}</p>
                    </article>
                     <div class="modal-buttons">
                         <button class="modal-buttons__watched modal-button">add to Watched</button>
                         <button class="modal-buttons__queue modal-button">add to queue</button>
                     </div>
                     </div>
                  </div>
                  `;P.style.display="block",document.body.addEventListener("click",t),P.innerHTML=h}}function t(e){e.target.closest(".modal-contant")||(document.body.classList.remove("modal-open"),P.style.display="none",document.body.removeEventListener("click",t))}document.body.addEventListener("click",e)}P.classList.add("modal"),document.body.appendChild(P),P.style.display="none";let q=1;const{cards:G,arrowRight:N,arrowLeft:T,formSubmit:x}=l.default;!async function(){let e=await d(q);await p(e),S()}();const{handleLeftClick:W,handleRightClick:Q}={handleRightClick:async()=>{q+=1;try{f();let e=await d(q);p(e),S(q)}catch(e){console.error(e)}},handleLeftClick:async()=>{q-=1;try{f();let e=await d(q);p(e),S(q)}catch(e){console.error(e)}}};T.addEventListener("click",W),N.addEventListener("click",Q),g.addEventListener("submit",async e=>{e.preventDefault();let t=e.currentTarget.serchQuary.value.trim(),a=await fetch(`${h}?api_key=${v}&query=${t}`),n=await a.json(),o=await n.results.filter(e=>{if(e&&null!==e.poster_path)return e}),i=await o.map(({id:e})=>e),l=await Promise.all(i.map(async e=>{let t=await fetch(`${y}${e}?api_key=${v}`),{title:a,poster_path:n,release_date:o,genres:i}=await t.json(),l=i.map(({name:e})=>e).join(" "),s=o.slice(0,4);return`
            <li class="page-item" data-id="${e}">
                <a href="#" class="page-item__link">
                    <img class="page-item__img" src="https://image.tmdb.org/t/p/w500${n}" alt="${a}"/>
                    <div class="page-description">
                        <h2 class="page-description__title">${a}</h2>
                        <p class="page-description__podscription">${l} ${s}</p>
                    </div>
                </a>
            </li>`}));f(),$.style.display="none",b.innerHTML=l.join(" ")}),U();
//# sourceMappingURL=index.93953a2f.js.map
