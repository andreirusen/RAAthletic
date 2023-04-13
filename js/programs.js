let bgImg = document.querySelector('.bg-programs-img');
let fgImg = document.querySelector('.fg-programs-img');
let headerPrograms = document.querySelector('.header-programs');
let btnPrograms = document.querySelector('.btn-programs')

window.addEventListener('scroll', function() {
    let value = window.scrollY;
    fgImg.style.left = value * 0.3 + 'px';
    headerPrograms.style.marginRight = value * 1.3 + 'px'; 
    btnPrograms.style.marginLeft = value * 1.3 + 'px'; 
});
