!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in a){var r=a[e];delete a[e];var n={id:e,exports:{}};return t[e]=n,r.call(n.exports,n,n.exports),n.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){a[e]=t},e.parcelRequired7c6=r),r.register;var n=(r("4Nugj"),r("4Nugj"));let{API_KEY:i,BASE_URL_ALL:l,BASE_URL_GENRE:s,cards:o}=n.default;async function c(e=1){o.classList.add("loader");try{let t=await fetch(`${l}?api_key=${i}&page=${e}`);if(!t.ok)throw Error(t.statusText);let a=await t.json(),r=await Promise.all(a.results.map(async e=>{try{let t=await fetch(`${s}${e.id}?api_key=${i}&include_image_language=en,null`);if(!t.ok)throw Error(t.statusText);return await t.json()}catch(e){console.log("Error fetching genre information:",e)}}));return o.classList.remove("loader"),r}catch(e){console.log("Error fetching all movies:",e)}}var n=r("4Nugj");let{cards:u}=n.default;async function d(e){try{let t=e.filter(e=>{if(e&&null!==e.poster_path)return e}).map(({title:e,poster_path:t,genres:a,release_date:r,id:n})=>{let i=a.map(e=>e.name).join(", "),l=r.slice(0,4);return`
              <li class="page-item" data-id="${n}">
                 <a href="#" class="page-item__link">
                 <img src="https://image.tmdb.org/t/p/w500${t}">
                 <div class="page-description">
                     <h2 class="page-description__title">${e}</h2>
                     <p class="page-description__podscription">${i} <span>| ${l}</span></p>
                 </div>
                 </a>
              </li>`}).join(" ");u.insertAdjacentHTML("beforeend",t)}catch(e){console.log(e)}}var n=r("4Nugj"),g=r("ejkSG"),n=r("4Nugj");let{cards:p}=n.default;function f(){p.innerHTML=""}var h=r("l8JbC");let{formSubmit:m,BASE_URL_QUERY:_,API_KEY:y,BASE_URL_GENRE:w,cards:P,pagination:$}=n.default;(0,h.default)();var n=r("4Nugj");let{API_KEY:E,BASE_URL_ALL:v,arrowRight:L,arrowLeft:j}=n.default,k={totalPageCount:0,currentPage:1,maxPageBtn:9,nearEdgeThreshold:3,pageNumbersHtml:document.querySelector(".js-list")};async function b(e=1){let t=await fetch(`${v}?api_key=${E}&page=${e}`),a=await t.json();k.totalPageCount=a.total_pages,k.currentPage=e;let r=[];if(k.totalPageCount<=k.maxPageBtn)for(let e=1;e<=k.totalPageCount;e++)r.push(e);else if(k.currentPage<=k.nearEdgeThreshold+1){for(let e=1;e<=k.maxPageBtn-2;e+=1)r.push(e);r.push("..."),r.push(k.totalPageCount)}else if(k.currentPage>=k.totalPageCount-k.nearEdgeThreshold){r.push(1),r.push("...");for(let e=k.totalPageCount-k.maxPageBtn+3;e<=k.totalPageCount;e+=1)r.push(e)}else{r.push(1),r.push("...");for(let e=k.currentPage-k.nearEdgeThreshold;e<=k.currentPage+k.nearEdgeThreshold;e+=1)r.push(e);r.push("..."),r.push(k.totalPageCount)}let n=r.map(e=>{if("..."===e)return`<span>${e}</span>`;{let t=k.currentPage===e?"isactive":"";return`<button class="js-page-number ${t}" data-page="${e}">${e}</button>`}}).join("");k.pageNumbersHtml.innerHTML=n,L.disabled=k.currentPage===k.totalPageCount,j.disabled=1===k.currentPage}async function N(e){console.log("Запрашиваем страницу номер:",e),f(),d(await c(e)),b(e)}document.querySelector(".js-list").addEventListener("click",async e=>{let t=e.target.closest(".js-page-number");if(t){let e=parseInt(t.dataset.page);isNaN(e)||await N(e)}}),L.addEventListener("click",async()=>{if(k.currentPage<k.totalPageCount){let e=k.currentPage+1;await N(e)}}),j.addEventListener("click",async()=>{if(k.currentPage>1){let e=k.currentPage-1;await N(e)}});var C=r("9OMvP");let T=1,{arrowRight:R,arrowLeft:A}=n.default;!async function(){let e=await c(T);await d(e),b()}();let{handleLeftClick:x,handleRightClick:B}={handleRightClick:async()=>{T+=1;try{f();let e=await c(T);d(e),b(T)}catch(e){console.error(e)}},handleLeftClick:async()=>{T-=1;try{f();let e=await c(T);d(e),b(T)}catch(e){console.error(e)}}};A.addEventListener("click",x),R.addEventListener("click",B),m.addEventListener("submit",async e=>{e.preventDefault();let t=e.currentTarget.serchQuary.value.trim();if(!t){(0,g.Notify).info("You have not entered anything");return}P.classList.add("loader");try{let e=await fetch(`${_}?api_key=${y}&query=${t}`),a=await e.json();if(0===a.total_pages||0===a.total_results){(0,g.Notify).info("Nothing found for your request");return}{let e=await a.results.filter(e=>{if(e&&null!==e.poster_path)return e}),t=await e.map(({id:e})=>e),r=await Promise.all(t.map(async e=>{let t=await fetch(`${w}${e}?api_key=${y}`),{title:a,poster_path:r,release_date:n,genres:i}=await t.json(),l=i.map(({name:e})=>e).join(" "),s=n.slice(0,4);return`
              <li class="page-item" data-id="${e}">
                  <a href="#" class="page-item__link">
                      <img class="page-item__img" src="https://image.tmdb.org/t/p/w500${r}" alt="${a}"/>
                      <div class="page-description">
                          <h2 class="page-description__title">${a}</h2>
                          <p class="page-description__podscription">${l} ${s}</p>
                      </div>
                  </a>
              </li>`}));(0,g.Notify).success(`According to your request
      found ${a.results.length} films`),f(),$.style.display="none",P.innerHTML=r.join(" ")}}catch(e){console.error("An error occurred while delivering data",console.error())}finally{P.classList.remove("loader")}}),(0,C.default)()}();
//# sourceMappingURL=index.b538eca4.js.map