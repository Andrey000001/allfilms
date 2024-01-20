!function(){let e="8c1c21cb3de0f31fcce2cce049e2c70c";async function t(t=1){let a=await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${e}&page=${t}`),i=await a.json();return Promise.all(await i.results.map(async t=>{try{let a=await fetch(`https://api.themoviedb.org/3/movie/${t.id}?api_key=${e}&include_image_language=en,null`);if(!a.ok)throw Error(a.statusText);return await a.json()}catch(e){console.log("Errorrrrrr",e)}}))}i();let a=document.querySelector(".js-cards");async function i(){try{let e=(await t()).filter(e=>{if(e&&null!==e.poster_path)return e}).map(({title:e,poster_path:t,genres:a,release_date:i})=>{let r=a.map(e=>e.name).join(", "),s=i.slice(0,4);return`
            <li class="page-item">
               <a href="#" class="page-item__link">
               <img src="https://image.tmdb.org/t/p/w500${t}">
               <div class="page-description">
                   <h2 class="page-description__title">${e}</h2>
                   <p class="page-description__podscription">${r} <span>| ${s}</span></p>
               </div>
               </a>
            </li>`}).join(" ");a.insertAdjacentHTML("beforeend",e)}catch(e){console.log(e)}}}();
//# sourceMappingURL=index.af52476c.js.map
