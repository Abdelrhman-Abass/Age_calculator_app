const dayIn = document.getElementById('day-input');
const unvday = document.getElementById('day-error-massage');
const daylabel = document.querySelector('label[for="day-input"]');
const dayout = document.getElementById('day-out');
let dayInput = true;
const monthIn = document.getElementById('month-input');
const uvmonth = document.getElementById('month-error-massage');
const monthlabel = document.querySelector('label[for="month-input"]');
const monthout = document.getElementById('month-out');
let monthInput = true;
const yearIn = document.getElementById('year-input');
const uvyear = document.getElementById('year-error-massage');
const yearlabel = document.querySelector('label[for="year-input"]');
const yearout = document.getElementById('year-out');
let yearInput = true;
const btn = document.getElementById('my-btn');
const form = document.getElementById('my-form');

// Only Allow  Numbers
function onlyAllowNumbers(e) {
  if (isNaN(Number(e.key))) {
    e.preventDefault();
  }
}
dayIn.addEventListener('keypress', onlyAllowNumbers);
monthIn.addEventListener('keypress', onlyAllowNumbers);
yearIn.addEventListener('keypress', onlyAllowNumbers);
// Only Allow  Numbers


btn.addEventListener('click', function(e) {
  e.preventDefault(); 
// Validatoin
// Cheak day---------------------------------------
if (dayIn.value === "") {
  unvday.innerHTML = "This Field is Required";
  unvday.style.color = "hsl(0, 100%, 67%)";
  dayIn.style.cssText = "border: 1px solid hsl(0, 100%, 67%)";
  daylabel.style.color = "hsl(0, 100%, 67%)";
} 
else if (dayIn.value > 31 || (dayIn.value == 31 && [4, 6, 9, 11].includes(parseInt(monthIn.value))) 
|| (dayIn.value > 29 && parseInt(monthIn.value) == 2) 
|| (dayIn.value == 29 && parseInt(monthIn.value) == 2 
&& (parseInt(yearIn.value) % 4 != 0 || (parseInt(yearIn.value) % 100 == 0 && parseInt(yearIn.value) % 400 != 0)))) {
unvday.innerHTML = "Must be a valid day";
unvday.style.color = "hsl(0, 100%, 67%)";
dayIn.style.cssText = "border: 1px solid hsl(0, 100%, 67%)";
daylabel.style.color = "hsl(0, 100%, 67%)";
}

else if (dayIn.value >= 1 && dayIn.value <= 31) {
  unvday.innerHTML = "";
  dayIn.style.cssText = ""; // reset the style
  daylabel.style.color = "";
  dayInput = true;
}
else  {
  // the day value is not valid
  unvday.innerHTML = "Must Be a valid day";
  unvday.style.color = "hsl(0, 100%, 67%)";
  dayIn.style.cssText = "border: 1px solid hsl(0, 100%, 67%)";
  daylabel.style.color = "hsl(0, 100%, 67%)";
}
// cheak day---------------------------------------
// cheak month---------------------------------------
  if (monthIn.value === "") {
  uvmonth.innerHTML = "This Field is Required";
  uvmonth.style.color = "hsl(0, 100%, 67%)";
  monthIn.style.cssText = "border: 1px solid hsl(0, 100%, 67%)";
  monthlabel.style.color = "hsl(0, 100%, 67%)";
} else if (dayIn.value > 31 || (dayIn.value == 31 && [4, 6, 9, 11].includes(parseInt(monthIn.value))) 
|| (dayIn.value > 29 && parseInt(monthIn.value) == 2) 
|| (dayIn.value == 29 && parseInt(monthIn.value) == 2 
&& (parseInt(yearIn.value) % 4 != 0 || (parseInt(yearIn.value) % 100 == 0 && parseInt(yearIn.value) % 400 != 0)))) {
unvday.innerHTML = "Must be a valid day";
unvday.style.color = "hsl(0, 100%, 67%)";
dayIn.style.cssText = "border: 1px solid hsl(0, 100%, 67%)";
daylabel.style.color = "hsl(0, 100%, 67%)";
}
else if (monthIn.value >= 1 && monthIn.value <= 12) {
  uvmonth.innerHTML = "";
  uvmonth.style.color = "";
  uvmonth.style.cssText = "";
  monthIn.style.cssText = "";
  monthlabel.style.color = "";
  monthInput = true
} 
else {
  uvmonth.innerHTML = "Must Be a valid Month";
  uvmonth.style.color = "hsl(0, 100%, 67%)";
  monthIn.style.cssText = "border: 1px solid hsl(0, 100%, 67%)";
  monthlabel.style.color = "hsl(0, 100%, 67%)";
}
// cheak month---------------------------------------
// check year--------------------------------------
const currentYear = new Date().getFullYear();

  if(yearIn.value.length === 0) {
  uvyear.innerHTML = "This Field is Required";
  uvyear.style.color = "hsl(0, 100%, 67%)";
  yearIn.style.cssText = "border: 1px solid hsl(0, 100%, 67%)";
  yearlabel.style.color = "hsl(0, 100%, 67%)";
  
}
else if (yearIn.value <= currentYear) {
  uvyear.innerHTML = "";
  uvyear.style.color = "";
  uvyear.style.cssText = ""; // reset the style
  yearIn.style.cssText = ""; // reset the style
  yearlabel.style.color = "";
  yearInput = true;
} 
else {
  // the year value is not valid
  uvyear.innerHTML = "Must Be a valid Year"; // fixed error message
  uvyear.style.color = "hsl(0, 100%, 67%)";
  yearIn.style.cssText = "border: 1px solid hsl(0, 100%, 67%)";
  yearlabel.style.color = "hsl(0, 100%, 67%)";
}
//check year--------------------------------------
if (dayInput === true && monthInput === true && yearInput === true) {
  const Y = Number(yearIn.value);
  const M = Number(monthIn.value);
  const D = Number(dayIn.value);
  const birthday = `${Y}-${M}-${D}`;

  // Age Calculation
  let years = new Date().getFullYear() - new Date(birthday).getFullYear();
  let months = new Date().getMonth() - new Date(birthday).getMonth();
  let days = new Date().getDate() - D;
  if (months < 0) {
    years--;
    months += 12;
  }
  if (days < 0) {
    days += getNoOfDays(Y, M - 1);
  }
  
  // Display Values
  dayout.innerText = days;
  monthout.innerText = months;
  yearout.innerText = years;
  
  // Get Number of Days in a particular month
  function getNoOfDays(y, m) {
    return new Date(y, m, 0).getDate();
  }
}

});