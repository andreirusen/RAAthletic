// Swipe Btn
function check() {
  var checkBox = document.getElementById("checkbox");
  var text1 = document.getElementsByClassName("text1");
  var text2 = document.getElementsByClassName("text2");

  for (var i = 0; i < text1.length; i++) {
    if (checkBox.checked == true) {
      text1[i].style.display = "none";
      text2[i].style.display = "block";
    } else if (checkBox.checked == false) {
      text1[i].style.display = "block";
      text2[i].style.display = "none";
    }
  }
}
check();

// Scroll To Timer
const scrollDelay = 1000;
const scrollStepDelay = 1000;
const targetElement = document.getElementById("programs-section");

function scrollTo() {
  targetElement.scrollIntoView({ behavior: "smooth" });
}

setTimeout(scrollTo, scrollDelay);


// Rating Carousel
var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 1,
  speed: 600,
  loop: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 3,
    slideShadows: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: false,
  },
});

// Timer to change the slider every 4 seconds
setInterval(function() {
  swiper.slideNext();
}, 4000);



