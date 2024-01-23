var e={API_KEY:"8c1c21cb3de0f31fcce2cce049e2c70c",BASE_URL_ALL:"https://api.themoviedb.org/3/trending/all/day",BASE_URL_GENRE:"https://api.themoviedb.org/3/movie/",BASE_URL_QUERY:"https://api.themoviedb.org/3/search/movie",cards:document.querySelector(".js-cards"),arrowRight:document.querySelector(".js-arrow-to_right"),arrowLeft:document.querySelector(".js-arrow-to_left"),formSubmit:document.querySelector(".form-page")};const{API_KEY:a,BASE_URL_ALL:t,BASE_URL_GENRE:s}=e;async function i(e=1){let i=await fetch(`${t}?api_key=${a}&page=${e}`),l=await i.json(),o=await l.results.map(async e=>{try{let t=await fetch(`${s}${e.id}?api_key=${a}&include_image_language=en,null`);if(!t.ok)throw Error(t.statusText);return await t.json()}catch(e){console.log("Errorrrrrr",e)}});return await Promise.all(o)}const{cards:l}=e;async function o(e){try{let a=e.filter(e=>{if(e&&null!==e.poster_path)return e}).map(({title:e,poster_path:a,genres:t,release_date:s,id:i})=>{let l=t.map(e=>e.name).join(", "),o=s.slice(0,4);return`
              <li class="page-item" data-id="${i}">
                 <a href="#" class="page-item__link">
                 <img src="https://image.tmdb.org/t/p/w500${a}">
                 <div class="page-description">
                     <h2 class="page-description__title">${e}</h2>
                     <p class="page-description__podscription">${l} <span>| ${o}</span></p>
                 </div>
                 </a>
              </li>`}).join(" ");l.insertAdjacentHTML("beforeend",a)}catch(e){console.log(e)}}const{cards:n}=e;function r(){n.innerHTML=""}const{formSubmit:c,BASE_URL_QUERY:d,API_KEY:p,BASE_URL_GENRE:u,cards:m}=e,{API_KEY:_,BASE_URL_ALL:g,arrowRight:h,arrowLeft:f}=e;async function v(e=1){let a=await fetch(`${g}?api_key=${_}&page=${e}`);console.log(e);let{totalPageCount:t,currentPage:s,pageNumbers:l,maxPageBtn:n,nearEdgeThreshold:c,pageNumbersHtml:d}={totalPageCount:(await a.json()).total_pages,currentPage:e,pageNumbers:[],maxPageBtn:9,nearEdgeThreshold:3,pageNumbersHtml:document.querySelector(".js-list")};if(t<=n)for(let e=1;e<=t;e+=1)l.push(e);else if(s<=c+1){for(let e=1;e<=n-2;e+=1)l.push(e);l.push("..."),l.push(t)}else if(s>=t-c){l.push(1),l.push("...");for(let e=t-n+3;e<=t;e+=1)l.push(e)}else{l.push(1),l.push("...");for(let e=s-c;e<=s+c;e+=1)l.push(e);l.push("..."),l.push(t)}let p=l.map(a=>{if("..."===a)return`<span>${a}</span>`;{let t=e===a?"isactive":"";return`<button class="js-page-number ${t}" data-page="${a}">${a}</button>`}}).join("");d.innerHTML=p,h.disabled=e===t,f.disabled=1===e,document.querySelectorAll(".js-page-number").forEach(a=>{a.addEventListener("click",async()=>{let t=parseInt(a.dataset.page);isNaN(t)||(e=t,r(),o(await i(e)),v())})})}const{BASE_URL_GENRE:$,API_KEY:w}=e,y=document.createElement("div");async function b(){window.addEventListener("click",async e=>{let a=e.target.closest(".page-item");if(a){let e=a.dataset.id,t=await fetch(`${$}${e}?api_key=${w}`),s=await t.json();console.log(s);let{genres:i,title:l,poster_path:o,vote_average:n,vote_count:r,original_title:c,popularity:d,overview:p}=s,u=i.map(({name:e})=>e).join(" | "),m=n.toString().slice(0,3),_=r.toString();y.innerHTML="";let g=`
              <div class="modal__container">
                <div class="modal-contant">
                <img src="https://image.tmdb.org/t/p/w500${o}" alt="${l}"/>
                <article class="modal-article">
                     <h2 class="modal-article__title">${l}</h2>
                    <div class="info-modal">
                    
                        <p class="info-modal__lean">Vote / Votes<span class="info-modal__value overage-modal">${m}</span> / <span class="vote-modal info-modal__value">${_}</span></p>
                        <p class="info-modal__lean">Popularity<span class="info-modal__value popular-modal">${function(e){let a=parseFloat(e);if(!isNaN(a)){let e=a.toFixed(1);return e.endsWith(".")?e.slice(0,-1):e.endsWith(".0")?e.slice(0,-2):e}return"Invalid value"}(d)}</span></p>
                        <p class="info-modal__lean">Original Title<span class="info-modal__value title-modal">${c}</span></p>
                        <p class="info-modal__lean">Genre<span class="info-modal__value genre-modal">${u}</span></p>
                    </div>
                    <p class="info-modal__about">About</\u{437}>
                    <p class="info-modal__overview">${p}</p>
                </article>
                 <div class="modal-buttons">
                     <button class="modal-buttons__watched modal-button">add to Watched</button>
                     <button class="modal-buttons__queue modal-button">add to queue</button>
                 </div>
                 </div>
              </div>
              `;y.innerHTML=g,y.style.display="block"}})}y.classList.add("modal"),document.body.appendChild(y),y.style.display="none";let E=1;const{cards:L,arrowRight:A,arrowLeft:R,formSubmit:S}=e;!async function(){let e=await i(E);await o(e),v()}();const{handleLeftClick:j,handleRightClick:k}={handleRightClick:async()=>{E+=1;try{r();let e=await i(E);o(e),v(E)}catch(e){console.error(e)}},handleLeftClick:async()=>{E-=1;try{r();let e=await i(E);o(e),v(E)}catch(e){console.error(e)}}};R.addEventListener("click",j),A.addEventListener("click",k),c.addEventListener("submit",async e=>{e.preventDefault();let a=e.currentTarget.serchQuary.value.trim(),t=await fetch(`${d}?api_key=${p}&query=${a}`),s=await t.json(),i=await s.results.filter(e=>{if(e&&null!==e.poster_path)return e}),l=await i.map(({id:e})=>e),o=await Promise.all(l.map(async e=>{let a=await fetch(`${u}${e}?api_key=${p}`),{title:t,poster_path:s,release_date:i,genres:l}=await a.json(),o=l.map(({name:e})=>e).join(" "),n=i.slice(0,4);return`
            <li class="page-item" data-id="${e}">
                <a href="#" class="page-item__link">
                    <img src="https://image.tmdb.org/t/p/w500${s}" alt="${t}">
                    <div class="page-description">
                        <h2 class="page-description__title">${t}</h2>
                        <p class="page-description__podscription">${o} ${n}</p>
                    </div>
                </a>
            </li>`}));r(),m.innerHTML=o.join(" ")}),b();
//# sourceMappingURL=index.85cb4a42.js.map
