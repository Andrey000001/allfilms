import refs from './refs';
import { createMarkup } from './createMarkup';
import clearPage from './clearPage';
import fetchMovies from './fetchMovie';
const { API_KEY, BASE_URL_ALL, arrowRight, arrowLeft ,cards } = refs;

export default async function updatePage(page = 1) {

  //Запрос
  const response = await fetch(
    `${BASE_URL_ALL}?api_key=${API_KEY}&page=${page}`
  );
  const data = await response.json();

  const reft = {
    totalPageCount: data.total_pages,
    currentPage: page,
    pageNumbers: [],
    maxPageBtn: 9,
    nearEdgeThreshold: 3,
    pageNumbersHtml: document.querySelector('.js-list'),
  };

  const {
    totalPageCount,
    currentPage,
    pageNumbers,
    maxPageBtn,
    nearEdgeThreshold,
    pageNumbersHtml,
  } = reft;
  //Проверка на страницы 
  if (totalPageCount <= maxPageBtn) {
    for (let i = 1; i <= totalPageCount; i += 1) {
      pageNumbers.push(i);
    }
  } else {
    // 1                 3  + 1
    if (currentPage <= nearEdgeThreshold + 1) {
      for (let i = 1; i <= maxPageBtn - 2; i += 1) {
        pageNumbers.push(i);
      }
      pageNumbers.push('...');
      pageNumbers.push(totalPageCount);
    } else if (currentPage >= totalPageCount - nearEdgeThreshold) {
      pageNumbers.push(1);
      pageNumbers.push('...');
      for (
        let i = totalPageCount - maxPageBtn + 3;
        i <= totalPageCount;
        i += 1
      ) {
        pageNumbers.push(i);
      }
    } else {
      pageNumbers.push(1);
      pageNumbers.push('...');
      for (
        let i = currentPage - nearEdgeThreshold;
        i <= currentPage + nearEdgeThreshold;
        i += 1
      ) {
        pageNumbers.push(i);
      }
      pageNumbers.push('...');
      pageNumbers.push(totalPageCount);
    }
  }

  //Добовляем isactive на кнопку 
  const pageNumbersHTML = pageNumbers
    .map(number => {
      if (number === '...') {
        return `<span>${number}</span>`;
      } else {
        const activeClass = page === number ? 'isactive' : '';
        return `<button class="js-page-number ${activeClass}" data-page="${number}">${number}</button>`;
      }
    })
    .join('');


  pageNumbersHtml.innerHTML = pageNumbersHTML;
  arrowRight.disabled = page === totalPageCount;
  arrowLeft.disabled = page === 1;

  document.querySelectorAll('.js-page-number').forEach(button => {
    button.addEventListener('click', async () => {
      const newPage = parseInt(button.dataset.page);
      console.log(newPage);
      if (!isNaN(newPage)) {
        clearPage();
        const data = await fetchMovies(page);
        createMarkup(data);
        updatePage(newPage);
      }
    });
  });
}

