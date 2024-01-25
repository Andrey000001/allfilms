import refs from './refs';
const { BASE_URL_GENRE, API_KEY } = refs;
const modalContainer = document.createElement('div');
modalContainer.classList.add('modal');
document.body.appendChild(modalContainer);
modalContainer.style.display = 'none';

export default async function touchMovieInfo() {
  document.body.addEventListener('click', onOpen);

  async function onOpen(e) {
    const pageItem = e.target.closest('.page-item');
    if (pageItem) {
      document.body.classList.add('modal-open')
      const gotId = pageItem.dataset.id;
      const response = await fetch(
        `${BASE_URL_GENRE}${gotId}?api_key=${API_KEY}`
      );
      const data = await response.json();
      console.log(data);
      const {
        genres,
        title,
        poster_path,
        vote_average,
        vote_count,
        original_title,
        popularity,
        overview,
      } = data;
      const genreS = genres.map(({ name }) => name).join(' | ');
      const overage = vote_average.toString().slice(0, 3);
      const vote = vote_count.toString();
      const overviwW =
        overview.length > 350 ? overview.slice(0, 350) + '...' : overview;

      function checkCorect(num) {
        const parseValue = parseFloat(num);
        if (!isNaN(parseValue)) {
          const popular = parseValue.toFixed(1);
          if (popular.endsWith('.')) {
            return popular.slice(0, -1);
          } else if (popular.endsWith('.0')) {
            return popular.slice(0, -2);
          }
          return popular;
        }
        return 'Invalid value';
      }
      modalContainer.innerHTML = '';
      const backdrop = `
                  <div class="modal__container">
                    <div class="modal-contant">
                    <img src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${title}"/>
                    <article class="modal-article">
                         <h2 class="modal-article__title">${title}</h2>
                        <div class="info-modal">
                        
                            <p class="info-modal__lean">Vote / Votes<span class="info-modal__value overage-modal">${overage}</span> / <span class="vote-modal info-modal__value">${vote}</span></p>
                            <p class="info-modal__lean">Popularity<span class="info-modal__value popular-modal">${checkCorect(
                              popularity
                            )}</span></p>
                            <p class="info-modal__lean">Original Title<span class="info-modal__value title-modal">${original_title}</span></p>
                            <p class="info-modal__lean">Genre<span class="info-modal__value genre-modal">${genreS}</span></p>
                        </div>
                        <p class="info-modal__about">About</з>
                        <p class="info-modal__overview">${overviwW}</p>
                    </article>
                     <div class="modal-buttons">
                         <button class="modal-buttons__watched modal-button">add to Watched</button>
                         <button class="modal-buttons__queue modal-button">add to queue</button>
                     </div>
                     </div>
                  </div>
                  `;
      modalContainer.style.display = 'block';
      document.body.addEventListener('click', onCloseModal);
      modalContainer.innerHTML = backdrop;
    } 
    }
    function onCloseModal(e) {
      if (!e.target.closest('.modal-contant')) {
        document.body.classList.remove('modal-open')
        modalContainer.style.display = 'none';
        document.body.removeEventListener('click', onCloseModal);
      }
  }
}





// export default async function touchMovieInfo() {
//   document.body.addEventListener('click', async (e) => {
//     const pageItem = e.target.closest('.page-item');
//     if (pageItem) {
//       const gotId = pageItem.dataset.id;
//       const response = await fetch(
//         `${BASE_URL_GENRE}${gotId}?api_key=${API_KEY}`
//       );
//       const data = await response.json();
//       console.log(data);
//       const {
//         genres,
//         title,
//         poster_path,
//         vote_average,
//         vote_count,
//         original_title,
//         popularity,
//         overview,
//       } = data;
//       const genreS = genres.map(({ name }) => name).join(' | ');
//       const overage = vote_average.toString().slice(0, 3);
//       const vote = vote_count.toString();
//       const overviwW = overview.length > 350 ? overview.slice(0,350) + '...' : overview

//       function checkCorect(num) {
//         const parseValue = parseFloat(num);
//         if (!isNaN(parseValue)) {
//           const popular = parseValue.toFixed(1);
//           if (popular.endsWith('.')) {
//             return popular.slice(0, -1);
//           } else if (popular.endsWith('.0')) {
//             return popular.slice(0, -2);
//           }
//           return popular;
//         }
//         return 'Invalid value';
//       }
//       modalContainer.innerHTML = '';
//       const backdrop = `
//               <div class="modal__container">
//                 <div class="modal-contant">
//                 <img src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${title}"/>
//                 <article class="modal-article">
//                      <h2 class="modal-article__title">${title}</h2>
//                     <div class="info-modal">

//                         <p class="info-modal__lean">Vote / Votes<span class="info-modal__value overage-modal">${overage}</span> / <span class="vote-modal info-modal__value">${vote}</span></p>
//                         <p class="info-modal__lean">Popularity<span class="info-modal__value popular-modal">${checkCorect(
//                           popularity
//                         )}</span></p>
//                         <p class="info-modal__lean">Original Title<span class="info-modal__value title-modal">${original_title}</span></p>
//                         <p class="info-modal__lean">Genre<span class="info-modal__value genre-modal">${genreS}</span></p>
//                     </div>
//                     <p class="info-modal__about">About</з>
//                     <p class="info-modal__overview">${overviwW}</p>
//                 </article>
//                  <div class="modal-buttons">
//                      <button class="modal-buttons__watched modal-button">add to Watched</button>
//                      <button class="modal-buttons__queue modal-button">add to queue</button>
//                  </div>
//                  </div>
//               </div>
//               `;
//       modalContainer.style.display = 'block'
//       modalContainer.innerHTML = backdrop;
//     }else {
//       if(!e.target.closest('.modal-contant')) {
//         modalContainer.style.display = 'none'
//       }
//     }

//   });
// }
