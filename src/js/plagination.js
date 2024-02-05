import refs from './refs';
import { createMarkup } from './createMarkup';
import clearPage from './clearPage';
import fetchMovies from './fetchMovie';

const { API_KEY, BASE_URL_ALL, arrowRight, arrowLeft } = refs;

const reft = {
  totalPageCount: 0,
  currentPage: 1,
  maxPageBtn: 9,
  nearEdgeThreshold: 3,
  pageNumbersHtml: document.querySelector('.js-list'),
};

document.querySelector('.js-list').addEventListener('click', async (e) => {
  const targetButton = e.target.closest('.js-page-number');

  if (targetButton) {
    const newPage = parseInt(targetButton.dataset.page);
    if (!isNaN(newPage)) {
      await handlePageChange(newPage);
    }
  }
});

arrowRight.addEventListener('click', async () => {
  if (reft.currentPage < reft.totalPageCount) {
    const newPage = reft.currentPage + 1;
    await handlePageChange(newPage);
  }
});

arrowLeft.addEventListener('click', async () => {
  if (reft.currentPage > 1) {
    const newPage = reft.currentPage - 1;
    await handlePageChange(newPage);
  }
});


export default async function updatePage(page = 1) {
  const response = await fetch(
    `${BASE_URL_ALL}?api_key=${API_KEY}&page=${page}`
  );
  const data = await response.json();

  reft.totalPageCount = data.total_pages;
  reft.currentPage = page;

  const pageNumbers = [];

  if (reft.totalPageCount <= reft.maxPageBtn) {
    for (let i = 1; i <= reft.totalPageCount; i++) {
      pageNumbers.push(i);
    }
  } else {
    if (reft.currentPage <= reft.nearEdgeThreshold + 1) {
      for (let i = 1; i <= reft.maxPageBtn - 2; i += 1) {
        pageNumbers.push(i);
      }
      pageNumbers.push('...');
      pageNumbers.push(reft.totalPageCount);
    } else if (reft.currentPage >= reft.totalPageCount - reft.nearEdgeThreshold) {
      pageNumbers.push(1);
      pageNumbers.push('...');
      for (let i = reft.totalPageCount - reft.maxPageBtn + 3; i <= reft.totalPageCount; i += 1) {
        pageNumbers.push(i);
      }
    } else {
      pageNumbers.push(1);
      pageNumbers.push('...');
      for (let i = reft.currentPage - reft.nearEdgeThreshold; i <= reft.currentPage + reft.nearEdgeThreshold; i += 1) {
        pageNumbers.push(i);
      }
      pageNumbers.push('...');
      pageNumbers.push(reft.totalPageCount);
    }
  }

  const pageNumbersHTML = pageNumbers
    .map((number) => {
      if (number === '...') {
        return `<span>${number}</span>`;
      } else {
        const activeClass = reft.currentPage === number ? 'isactive' : '';
        return `<button class="js-page-number ${activeClass}" data-page="${number}">${number}</button>`;
      }
    })
    .join('');

  reft.pageNumbersHtml.innerHTML = pageNumbersHTML;
  arrowRight.disabled = reft.currentPage === reft.totalPageCount;
  arrowLeft.disabled = reft.currentPage === 1;
}

async function handlePageChange(newPage) {
  console.log('Запрашиваем страницу номер:', newPage);

  clearPage();
  const data = await fetchMovies(newPage);
  createMarkup(data);
  updatePage(newPage);
}