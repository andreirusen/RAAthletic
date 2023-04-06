// Cream un obiect ce contine toate detaliile despre data curenta.
var currentDate = new Date();
console.log(currentDate);

// Obiectul nou creat contine o serie de metode
var year = currentDate.getFullYear();
console.log(year);
// Atentie! Prima luna are valoarea 0.
var month = currentDate.getMonth();
console.log(month);
var day = currentDate.getDate();
console.log(day);