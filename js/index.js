var typed = new Typed ('#typed-strings', {
  strings:['Start exercising today!','No more excuses!','You are ready!'],
  typeSpeed: 70,
  backSpeed: 50,
  loop:true
});

let leftSection = document.querySelector('.left-section')
let showcaseImg = document.querySelector('.showcase-img');

window.addEventListener('scroll', function() {
    let value = window.scrollY;
    leftSection.style.marginRight = value * 1 + 'px'; 
    showcaseImg.style.marginLeft = value * 1 + 'px'; 
});


let btnLetBegin = document.querySelector('.btn-let-begin')

document.addEventListener("scroll", function () {
  // Proprietatea scrollY reprezinta numarul de pizeli scrollati pe axa OY (cand nu am scrollat deloc este 0).
  if (window.scrollY > 500) {
      btnLetBegin.style.visibility = "visible";
  } else {
      btnLetBegin.style.visibility = "hidden";
  }
});