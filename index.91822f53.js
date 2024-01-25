!function(){function e(e,t,a,n){Object.defineProperty(e,t,{get:a,set:n,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in a)return a[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return a[e]=o,t.call(o.exports,o,o.exports),o.exports}var l=Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o);var l=o.register;l("4Nugj",function(t,a){e(t.exports,"default",function(){return n});var n={API_KEY:"8c1c21cb3de0f31fcce2cce049e2c70c",BASE_URL_ALL:"https://api.themoviedb.org/3/trending/all/day",BASE_URL_GENRE:"https://api.themoviedb.org/3/movie/",BASE_URL_QUERY:"https://api.themoviedb.org/3/search/movie",cards:document.querySelector(".js-cards"),arrowRight:document.querySelector(".js-arrow-to_right"),arrowLeft:document.querySelector(".js-arrow-to_left"),formSubmit:document.querySelector(".form-page"),logo:document.querySelector(".content-header__logo"),pagination:document.querySelector(".pagination")}}),l("l8JbC",function(t,a){e(t.exports,"default",function(){return l});var n=o("4Nugj");function l(){window.innerWidth>767?n.default.logo.textContent="Filmoteka":n.default.logo.textContent=""}l(),window.addEventListener("resize",function(){requestAnimationFrame(l)})});var i=(o("4Nugj"),o("4Nugj"));let{API_KEY:s,BASE_URL_ALL:r,BASE_URL_GENRE:c}=i.default;async function d(e=1){let t=await fetch(`${r}?api_key=${s}&page=${e}`),a=await t.json(),n=await a.results.map(async e=>{try{let t=await fetch(`${c}${e.id}?api_key=${s}&include_image_language=en,null`);if(!t.ok)throw Error(t.statusText);return await t.json()}catch(e){console.log("Errorrrrrr",e)}});return await Promise.all(n)}var i=o("4Nugj");let{cards:u}=i.default;async function p(e){try{let t=e.filter(e=>{if(e&&null!==e.poster_path)return e}).map(({title:e,poster_path:t,genres:a,release_date:n,id:o})=>{let l=a.map(e=>e.name).join(", "),i=n.slice(0,4);return`
              <li class="page-item" data-id="${o}">
                 <a href="#" class="page-item__link">
                 <img src="https://image.tmdb.org/t/p/w500${t}">
                 <div class="page-description">
                     <h2 class="page-description__title">${e}</h2>
                     <p class="page-description__podscription">${l} <span>| ${i}</span></p>
                 </div>
                 </a>
              </li>`}).join(" ");u.insertAdjacentHTML("beforeend",t)}catch(e){console.log(e)}}var i=(o("4Nugj"),o("4Nugj"));let{cards:m}=i.default;function g(){m.innerHTML=""}var f=o("l8JbC");let{formSubmit:_,BASE_URL_QUERY:h,API_KEY:v,BASE_URL_GENRE:y,cards:b,logo:w,pagination:$}=i.default;(0,f.default)();var i=o("4Nugj");let{API_KEY:E,BASE_URL_ALL:L,arrowRight:j,arrowLeft:N}=i.default;async function R(e=1){let t=await fetch(`${L}?api_key=${E}&page=${e}`);console.log(e);let{totalPageCount:a,currentPage:n,pageNumbers:o,maxPageBtn:l,nearEdgeThreshold:i,pageNumbersHtml:s}={totalPageCount:(await t.json()).total_pages,currentPage:e,pageNumbers:[],maxPageBtn:9,nearEdgeThreshold:3,pageNumbersHtml:document.querySelector(".js-list")};if(a<=l)for(let e=1;e<=a;e+=1)o.push(e);else if(n<=i+1){for(let e=1;e<=l-2;e+=1)o.push(e);o.push("..."),o.push(a)}else if(n>=a-i){o.push(1),o.push("...");for(let e=a-l+3;e<=a;e+=1)o.push(e)}else{o.push(1),o.push("...");for(let e=n-i;e<=n+i;e+=1)o.push(e);o.push("..."),o.push(a)}let r=o.map(t=>{if("..."===t)return`<span>${t}</span>`;{let a=e===t?"isactive":"";return`<button class="js-page-number ${a}" data-page="${t}">${t}</button>`}}).join("");s.innerHTML=r,j.disabled=e===a,N.disabled=1===e,document.querySelectorAll(".js-page-number").forEach(t=>{t.addEventListener("click",async()=>{let a=parseInt(t.dataset.page);isNaN(a)||(e=a,g(),p(await d(e)),R())})})}var i=o("4Nugj");let{BASE_URL_GENRE:S,API_KEY:k}=i.default,A=document.createElement("div");async function P(){async function e(e){let a=e.target.closest(".page-item");if(a){document.body.classList.add("modal-open");let e=a.dataset.id,n=await fetch(`${S}${e}?api_key=${k}`),o=await n.json();console.log(o);let{genres:l,title:i,poster_path:s,vote_average:r,vote_count:c,original_title:d,popularity:u,overview:p}=o,m=l.map(({name:e})=>e).join(" | "),g=r.toString().slice(0,3),f=c.toString(),_=p.length>350?p.slice(0,350)+"...":p;A.innerHTML="";let h=`
                  <div class="modal__container">
                    <div class="modal-contant">
                    <img src="https://image.tmdb.org/t/p/w500${s}" alt="${i}"/>
                    <article class="modal-article">
                         <h2 class="modal-article__title">${i}</h2>
                        <div class="info-modal">
                        
                            <p class="info-modal__lean">Vote / Votes<span class="info-modal__value overage-modal">${g}</span> / <span class="vote-modal info-modal__value">${f}</span></p>
                            <p class="info-modal__lean">Popularity<span class="info-modal__value popular-modal">${function(e){let t=parseFloat(e);if(!isNaN(t)){let e=t.toFixed(1);return e.endsWith(".")?e.slice(0,-1):e.endsWith(".0")?e.slice(0,-2):e}return"Invalid value"}(u)}</span></p>
                            <p class="info-modal__lean">Original Title<span class="info-modal__value title-modal">${d}</span></p>
                            <p class="info-modal__lean">Genre<span class="info-modal__value genre-modal">${m}</span></p>
                        </div>
                        <p class="info-modal__about">About</\u{437}>
                        <p class="info-modal__overview">${_}</p>
                    </article>
                     <div class="modal-buttons">
                         <button class="modal-buttons__watched modal-button">add to Watched</button>
                         <button class="modal-buttons__queue modal-button">add to queue</button>
                     </div>
                     </div>
                  </div>
                  `;A.style.display="block",document.body.addEventListener("click",t),A.innerHTML=h}}function t(e){e.target.closest(".modal-contant")||(document.body.classList.remove("modal-open"),A.style.display="none",document.body.removeEventListener("click",t))}document.body.addEventListener("click",e)}A.classList.add("modal"),document.body.appendChild(A),A.style.display="none";let q=1,{cards:T,arrowRight:x,arrowLeft:U,formSubmit:C}=i.default;!async function(){let e=await d(q);await p(e),R()}();let{handleLeftClick:B,handleRightClick:H}={handleRightClick:async()=>{q+=1;try{g();let e=await d(q);p(e),R(q)}catch(e){console.error(e)}},handleLeftClick:async()=>{q-=1;try{g();let e=await d(q);p(e),R(q)}catch(e){console.error(e)}}};U.addEventListener("click",B),x.addEventListener("click",H),_.addEventListener("submit",async e=>{e.preventDefault();let t=e.currentTarget.serchQuary.value.trim(),a=await fetch(`${h}?api_key=${v}&query=${t}`),n=await a.json(),o=await n.results.filter(e=>{if(e&&null!==e.poster_path)return e}),l=await o.map(({id:e})=>e),i=await Promise.all(l.map(async e=>{let t=await fetch(`${y}${e}?api_key=${v}`),{title:a,poster_path:n,release_date:o,genres:l}=await t.json(),i=l.map(({name:e})=>e).join(" "),s=o.slice(0,4);return`
            <li class="page-item" data-id="${e}">
                <a href="#" class="page-item__link">
                    <img class="page-item__img" src="https://image.tmdb.org/t/p/w500${n}" alt="${a}"/>
                    <div class="page-description">
                        <h2 class="page-description__title">${a}</h2>
                        <p class="page-description__podscription">${i} ${s}</p>
                    </div>
                </a>
            </li>`}));g(),$.style.display="none",b.innerHTML=i.join(" ")}),P()}();
//# sourceMappingURL=index.91822f53.js.map
