//Saving Data anouncement
// window.addEventListener("beforeunload", (event) => {
//   event.preventDefault();
//   event.returnValue = "";
// });
// Cream un obiect ce contine toate detaliile despre data curenta.
// var currentDate = new Date();
// console.log(currentDate);

// // Obiectul nou creat contine o serie de metode
// var year = currentDate.getFullYear();
// console.log(year);
// // Atentie! Prima luna are valoarea 0.
// var month = currentDate.getMonth();
// console.log(month);
// var day = currentDate.getDate();
// console.log(day);

var typed = new Typed ('#typed-strings', {
  strings:['Start exercising today!','No more excuses!','You are ready!'],
  typeSpeed: 70,
  backSpeed: 50,
  loop:true
});
