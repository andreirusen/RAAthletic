
// Scroll To Section
let contentAbout = document.querySelector(".scrollToPrograms");
function scrollToPrograms() {
  contentAbout.scrollIntoView({ behavior: "smooth" });
}

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



// Scrolling Page on time
$(document).ready(function() {
  function scrolltodiv(){
          $('html, body').animate({
              scrollTop: $("#scrollToPrograms").offset().top
          }, 2000);

  }


  window.setTimeout( scrolltodiv, 2000 );
});

let autoScroll = () =>{
  window.scrollBy(0,5);
  let scrolldelay=setTimeout (autoScroll,10)
}
autoScroll();
