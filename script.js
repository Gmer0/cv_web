var currentDateElement = document.getElementById("currentDate");

var currentDate = new Date();

var day = currentDate.getDate().toString().padStart(2, '0');
var month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
var year = currentDate.getFullYear();

currentDateElement.innerHTML = day + '.' + month + '.' + year;