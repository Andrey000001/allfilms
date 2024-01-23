!function(){var e={API_KEY:"8c1c21cb3de0f31fcce2cce049e2c70c",BASE_URL_ALL:"https://api.themoviedb.org/3/trending/all/day",BASE_URL_GENRE:"https://api.themoviedb.org/3/movie/",BASE_URL_QUERY:"https://api.themoviedb.org/3/search/movie",cards:document.querySelector(".js-cards"),arrowRight:document.querySelector(".js-arrow-to_right"),arrowLeft:document.querySelector(".js-arrow-to_left"),formSubmit:document.querySelector(".form-page")};let{API_KEY:a,BASE_URL_ALL:t,BASE_URL_GENRE:l}=e;async function s(e=1){let s=await fetch(`${t}?api_key=${a}&page=${e}`),i=await s.json(),o=await i.results.map(async e=>{try{let t=await fetch(`${l}${e.id}?api_key=${a}&include_image_language=en,null`);if(!t.ok)throw Error(t.statusText);return await t.json()}catch(e){console.log("Errorrrrrr",e)}});return await Promise.all(o)}let{cards:i}=e;async function o(e){try{let a=e.filter(e=>{if(e&&null!==e.poster_path)return e}).map(({title:e,poster_path:a,genres:t,release_date:l,id:s})=>{let i=t.map(e=>e.name).join(", "),o=l.slice(0,4);return`
              <li class="page-item" data-id="${s}">
                 <a href="#" class="page-item__link">
                 <img src="https://image.tmdb.org/t/p/w500${a}">
                 <div class="page-description">
                     <h2 class="page-description__title">${e}</h2>
                     <p class="page-description__podscription">${i} <span>| ${o}</span></p>
                 </div>
                 </a>
              </li>`}).join(" ");i.insertAdjacentHTML("beforeend",a)}catch(e){console.log(e)}}let{cards:n}=e;function r(){n.innerHTML=""}let{formSubmit:c,BASE_URL_QUERY:d,API_KEY:p,BASE_URL_GENRE:u,cards:m}=e,{API_KEY:_,BASE_URL_ALL:g,arrowRight:h,arrowLeft:f}=e;async function v(e=1){let a=await fetch(`${g}?api_key=${_}&page=${e}`);console.log(e);let{totalPageCount:t,currentPage:l,pageNumbers:i,maxPageBtn:n,nearEdgeThreshold:c,pageNumbersHtml:d}={totalPageCount:(await a.json()).total_pages,currentPage:e,pageNumbers:[],maxPageBtn:9,nearEdgeThreshold:3,pageNumbersHtml:document.querySelector(".js-list")};if(t<=n)for(let e=1;e<=t;e+=1)i.push(e);else if(l<=c+1){for(let e=1;e<=n-2;e+=1)i.push(e);i.push("..."),i.push(t)}else if(l>=t-c){i.push(1),i.push("...");for(let e=t-n+3;e<=t;e+=1)i.push(e)}else{i.push(1),i.push("...");for(let e=l-c;e<=l+c;e+=1)i.push(e);i.push("..."),i.push(t)}let p=i.map(a=>{if("..."===a)return`<span>${a}</span>`;{let t=e===a?"isactive":"";return`<button class="js-page-number ${t}" data-page="${a}">${a}</button>`}}).join("");d.innerHTML=p,h.disabled=e===t,f.disabled=1===e,document.querySelectorAll(".js-page-number").forEach(a=>{a.addEventListener("click",async()=>{let t=parseInt(a.dataset.page);isNaN(t)||(e=t,r(),o(await s(e)),v())})})}let{BASE_URL_GENRE:$,API_KEY:w}=e,y=document.createElement("div");async function b(){window.addEventListener("click",async e=>{let a=e.target.closest(".page-item");if(a){let e=a.dataset.id,t=await fetch(`${$}${e}?api_key=${w}`),l=await t.json();console.log(l);let{genres:s,title:i,poster_path:o,vote_average:n,vote_count:r,original_title:c,popularity:d,overview:p}=l,u=s.map(({name:e})=>e).join(" | "),m=n.toString().slice(0,3),_=r.toString();y.innerHTML="";let g=`
              <div class="modal__container">
                <div class="modal-contant">
                <img src="https://image.tmdb.org/t/p/w500${o}" alt="${i}"/>
                <article class="modal-article">
                     <h2 class="modal-article__title">${i}</h2>
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
              `;y.innerHTML=g,y.style.display="block"}})}y.classList.add("modal"),document.body.appendChild(y),y.style.display="none";let E=1,{cards:L,arrowRight:A,arrowLeft:R,formSubmit:S}=e;!async function(){let e=await s(E);await o(e),v()}();let{handleLeftClick:j,handleRightClick:k}={handleRightClick:async()=>{E+=1;try{r();let e=await s(E);o(e),v(E)}catch(e){console.error(e)}},handleLeftClick:async()=>{E-=1;try{r();let e=await s(E);o(e),v(E)}catch(e){console.error(e)}}};R.addEventListener("click",j),A.addEventListener("click",k),c.addEventListener("submit",async e=>{e.preventDefault();let a=e.currentTarget.serchQuary.value.trim(),t=await fetch(`${d}?api_key=${p}&query=${a}`),l=await t.json(),s=await l.results.filter(e=>{if(e&&null!==e.poster_path)return e}),i=await s.map(({id:e})=>e),o=await Promise.all(i.map(async e=>{let a=await fetch(`${u}${e}?api_key=${p}`),{title:t,poster_path:l,release_date:s,genres:i}=await a.json(),o=i.map(({name:e})=>e).join(" "),n=s.slice(0,4);return`
            <li class="page-item" data-id="${e}">
                <a href="#" class="page-item__link">
                    <img src="https://image.tmdb.org/t/p/w500${l}" alt="${t}">
                    <div class="page-description">
                        <h2 class="page-description__title">${t}</h2>
                        <p class="page-description__podscription">${o} ${n}</p>
                    </div>
                </a>
            </li>`}));r(),m.innerHTML=o.join(" ")}),b()}();
//# sourceMappingURL=index.0598b32e.js.map
