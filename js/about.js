let headerAbout = document.querySelector('.header-about');
let bgImg = document.querySelector('.bg-programs-img');
let fgAthlet = document.querySelector('.fg-athlet-programs-img');
let fgImg1 = document.querySelector('.fg1-programs-img');
let fgImg3 = document.querySelector('.fg3-programs-img');
let circleLeft = document.querySelector('.circle-left-img');
let circleRight = document.querySelector('.circle-right-img');
let scrollToTopButton = document.querySelector('.btn-let')
let btnLetBegin = document.querySelector('.btn-let-begin')

window.addEventListener('scroll', function() {
    let value = window.scrollY;
    headerAbout.style.marginTop = value * 1 + 'px'; 
    fgImg1.style.marginTop = value * 0.3 + 'px';
    fgImg3.style.marginLeft = value * 0.3 + 'px';
    circleLeft.style.marginRight = value * 0.3 + 'px';
    circleRight.style.marginLeft = value * 0.3 + 'px';
    fgAthlet.style.marginRight = value * 1 + 'px';

});

scrollToTopButton.addEventListener("click", function () {
    // Functia scrollTo este o functie predefinita.
    window.scrollTo({
      bottom: 0,
      behavior: "smooth",
    });
  });




  document.addEventListener("scroll", function () {
    // Proprietatea scrollY reprezinta numarul de pizeli scrollati pe axa OY (cand nu am scrollat deloc este 0).
    if (window.scrollY > 500) {
      btnLetBegin.style.visibility = "visible";
    } else {
      btnLetBegin.style.visibility = "hidden";
    }
  });