const preloder = document.querySelector('.preloder');
// console.log('preloder: ', preloder);
preloder.classList.add('active');
setTimeout(() => {
    preloder.classList.remove('active');
}, 500);

