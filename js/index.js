var typed = new Typed ('#typed-strings', {
  strings:['Start exercising today!','No more excuses!','You are ready!'],
  typeSpeed: 70,
  backSpeed: 50,
  loop:true
});




let leftSection = document.querySelector('.left-section')
let showcaseImg = document.querySelector('.showcase-img');
let c1 = document.querySelector('#content-1')
let c2 = document.querySelector('#content-2')


window.addEventListener('scroll', function() {
    let value = window.scrollY;
    leftSection.style.marginRight = value * 1.2 + 'px'; 
    showcaseImg.style.marginLeft = value * 1.2 + 'px'; 
});
