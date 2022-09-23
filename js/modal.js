const searchModal = document.querySelector('.search-model');
const searchBtn = document.querySelector('.icon_search');
const searchClose = searchModal.querySelector('.search-close-switch');

searchBtn.addEventListener('click', () => {
    searchModal.style.display = 'block';
})

searchClose.addEventListener('click', () => {
    searchModal.style.display = 'none';
})
