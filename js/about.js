let headerAbout = document.querySelector('.header-about');
let bgImg = document.querySelector('.bg-programs-img');
let fgAthlet = document.querySelector('.fg-athlet-programs-img');
let fgImg1 = document.querySelector('.fg1-programs-img');
let fgImg2 = document.querySelector('.fg2-programs-img');
let fgImg3 = document.querySelector('.fg3-programs-img');
let circleLeft = document.querySelector('.circle-left-img');
let circleRight = document.querySelector('.circle-right-img');

let eclipseLeft = document.querySelector('.eclipse-left-img');


window.addEventListener('scroll', function() {
    let value = window.scrollY;
    headerAbout.style.marginTop = value * 1.1 + 'px'; 
    fgImg1.style.marginTop = value * 0.3 + 'px';
    fgImg2.style.marginTop = value * 0.8 + 'px';
    fgImg3.style.marginLeft = value * 0.3 + 'px';
    circleLeft.style.marginRight = value * 0.3 + 'px';
    circleRight.style.marginLeft = value * 0.3 + 'px';
    eclipseLeft.style.marginRight = value * 1.1 + 'px';
    fgAthlet.style.marginRight = value * 1.1 + 'px';

});

// const scrollToContent = document.querySelector('#btn-let');
// scrollToContent.addEventListener("click", function () {
//     window.scrollTo({
//       bottom: 25%,
//       behavior: "smooth",
//     });
//   });