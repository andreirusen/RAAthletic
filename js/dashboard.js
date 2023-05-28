// Loader
var preloader = document.getElementById("preloader");
window.addEventListener("load", function () {
  preloader.style.display = "none";
});

// Navbar
const navEL = document.querySelector(".navbar");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", function () {
  // Navbar
  if (lastScrollY < window.scrollY) {
    navEL.classList.add("navbar--hidden");
  } else {
    navEL.classList.remove("navbar--hidden");
  }
  lastScrollY = window.scrollY;
});

// Button To Top - Right
let btnToTop = document.querySelector(".btn-to-top");
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 400 ||
    document.documentElement.scrollTop > 400
  ) {
    btnToTop.style.display = "block";
  } else {
    btnToTop.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Disapear Btn
let btnLetBegin = document.querySelector(".btn-let-begin");
document.addEventListener("scroll", function () {
  if (window.scrollY > 400) {
    btnLetBegin.style.visibility = "visible";
  } else {
    btnLetBegin.style.visibility = "hidden";
  }
});

// Reveal Section
window.addEventListener("scroll", reveal);
function reveal() {
  let reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    let windowheight = window.innerHeight;
    let revealtop = reveals[i].getBoundingClientRect().top;
    let revealpoint = 40;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

// Cookie
console.clear();
("use strict");
(function () {
  var offcanvas = document.getElementById("offcanvas");

  if (!sessionStorage.getItem("offcanvasShown")) {
    var bs_offcanvas = new bootstrap.Offcanvas(offcanvas);
    bs_offcanvas.show();

    sessionStorage.setItem("offcanvasShown", true);
  }
})();


/**
 * Created by Kupletsky Sergey on 16.09.14.
 *
 * Hierarchical timing
 * Add specific delay for CSS3-animation to elements.
 */

(function($) {
  var speed = 2000;
  var container =  $('.display-animation');
  container.each(function() {
      var elements = $(this).children();
      elements.each(function() {
          var elementOffset = $(this).offset();
          var offset = elementOffset.left*0.8 + elementOffset.top;
          var delay = parseFloat(offset/speed).toFixed(2);
          $(this)
              .css("-webkit-animation-delay", delay+'s')
              .css("-o-animation-delay", delay+'s')
              .css("animation-delay", delay+'s')
              .addClass('animated');
      });
  });
})(jQuery);

/**
* Created by Kupletsky Sergey on 04.09.14.
*
* Ripple-effect animation
* Tested and working in: ?IE9+, Chrome (Mobile + Desktop), ?Safari, ?Opera, ?Firefox.
* JQuery plugin add .ink span in element with class .ripple-effect
* Animation work on CSS3 by add/remove class .animate to .ink span
*/

(function($) {
  $(".ripple-effect").click(function(e){
      var rippler = $(this);

      // create .ink element if it doesn't exist
      if(rippler.find(".ink").length == 0) {
          rippler.append("<span class='ink'></span>");
      }

      var ink = rippler.find(".ink");

      // prevent quick double clicks
      ink.removeClass("animate");

      // set .ink diametr
      if(!ink.height() && !ink.width())
      {
          var d = Math.max(rippler.outerWidth(), rippler.outerHeight());
          ink.css({height: d, width: d});
      }

      // get click coordinates
      var x = e.pageX - rippler.offset().left - ink.width()/2;
      var y = e.pageY - rippler.offset().top - ink.height()/2;

      // set .ink position and add class .animate
      ink.css({
          top: y+'px',
          left:x+'px'
      }).addClass("animate");
  })
})(jQuery);