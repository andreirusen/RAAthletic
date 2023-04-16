let headerWelcome = document.querySelector(".header-welcome");
let headerTyped = document.querySelector(".header-typed");
let btnHome = document.querySelector(".btn-home");

let fgImg1 = document.querySelector(".fg1-showcase-img");
let fgImg3 = document.querySelector(".fg3-showcase-img");
let fgImg4 = document.querySelector(".fg4-showcase-img");
let fgImg5 = document.querySelector(".fg5-showcase-img");


let contentSection = document.querySelector('.content-section') 


// Parallax Effect
window.addEventListener("scroll", function () {
  let value = window.scrollY;

  headerWelcome.style.marginBottom = value * 1 + "px";
  headerTyped.style.marginBottom = value * 1 + "px";
  btnHome.style.marginTop = value * 1 + "px";
  
  fgImg1.style.marginTop = value * 0.3 + "px";
  fgImg3.style.marginLeft = value * 0.3 + "px";
  
  fgImg4.style.marginRight = value * 1 + "px";
  fgImg5.style.marginLeft = value * 3 + "px";
});



// Button Let Begin Right
let btnLetBegin = document.querySelector('.btn-let-begin')
document.addEventListener("scroll", function () {
  // Proprietatea scrollY reprezinta numarul de pizeli scrollati pe axa OY (cand nu am scrollat deloc este 0).
  if (window.scrollY > 400) {
      btnLetBegin.style.visibility = "visible";
  } else {
      btnLetBegin.style.visibility = "hidden";
  }
});


//Typing Section
var typed = new Typed ('#typed-strings', {
  strings:['Start exercising today!','No more excuses!','You are ready!'],
  typeSpeed: 70,
  backSpeed: 50,
  loop:true
});
// Disappear of text
document.addEventListener("scroll", function () {
  // Proprietatea scrollY reprezinta numarul de pizeli scrollati pe axa OY (cand nu am scrollat deloc este 0).
  if (window.scrollY > 0) {
    headerTyped.style.visibility = "hidden";
  } else {
    headerTyped.style.visibility = "visible";
  }
});

//Dissapear of Btn
document.addEventListener("scroll", function () {
  // Proprietatea scrollY reprezinta numarul de pizeli scrollati pe axa OY (cand nu am scrollat deloc este 0).
  if (window.scrollY > 0) {
    headerTyped.style.visibility = "hidden";
  } else {
    headerTyped.style.visibility = "visible";
  }
});

// Scroll To Section
function scrollToContent() {
  contentSection.scrollIntoView({ behavior: "smooth" });
}