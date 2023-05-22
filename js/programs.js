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





// Scroll To Section
const goToPrograms = setTimeout(scrollTo, 2000);

function scrollTo(goToPrograms) {
  document.documentElement.scrollBy(0, 900);
}
scrollTo()


function scrollToPrograms() {
  document.getElementById("scrollToPrograms").scrollTo({ behavior: "smooth", top: 0 });
  
}

