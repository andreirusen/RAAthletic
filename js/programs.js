let bgImg = document.querySelector('.bg-programs-img');
let fgImg = document.querySelector('.fg-programs-img');
let headerPrograms = document.querySelector('.header-programs');
let btnPrograms = document.querySelector('.btn-programs')
let btnLetBegin = document.querySelector('.btn-let-begin')

window.addEventListener('scroll', function() {
    let value = window.scrollY;
    fgImg.style.left = value * 0.3 + 'px';
    headerPrograms.style.marginRight = value * 1 + 'px'; 
    btnPrograms.style.marginLeft = value * 1 + 'px'; 
});

document.addEventListener("scroll", function () {
  // Proprietatea scrollY reprezinta numarul de pizeli scrollati pe axa OY (cand nu am scrollat deloc este 0).
  if (window.scrollY > 700) {
      btnLetBegin.style.visibility = "visible";
  } else {
      btnLetBegin.style.visibility = "hidden";
  }
});