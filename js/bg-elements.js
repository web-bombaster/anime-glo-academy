const elements = document.querySelectorAll('.set-bg');
elements.forEach(element => {
    // console.dir(element);
    const src = element.dataset.setbg;
    element.style.backgroundImage = `url('${src}')`;
});