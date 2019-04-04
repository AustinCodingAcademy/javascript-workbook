//Write a JavaScript program to display the current day and time.
//1. Write a JavaScript program to display the current day and time.
var calendar = new Date();
var date = (calendar.getMonth()+1) + '/' + calendar.getDate() + '/' + calendar.getFullYear();
console.log(date);

var time = calendar.getHours() + ':' + calendar.getMinutes()
var dateTime = date + ' ' + time
// console.log(dateTime);

// var dateButt = 
document.getElementById('dateButt').innerHTML = dateTime;

//2. Write a JavaScript program to convert a number to a string.

var seven = 7;
var stringTheory = seven.toString();
console.log(stringTheory);
document.getElementById('numToStr').innerHTML = stringTheory;


//3. Write a JavaScript program to convert a string to the number.
// var eight = '8';
var n = Number('8');
console.log(n);
document.getElementById('strToNum').innerHTML = n;

//4. Create one variable for each of the data types below:

//Boolean
let bool = true;
//Null
let nope = null;
//Undefined
let ambiguous;
//Number
let num = 9;
//NaN
let nanny = 100*"cucumber";
//String
let stringy = 'I\'m a string';

// function declaration to determine data type - typeof
function isTypeOf(data) {
  return console.log(typeof data);
};

// function invocation
isTypeOf(bool);
document.getElementById(bool).innerHTML = nyope;
isTypeOf(nope);
document.getElementById('bothTrue').innerHTML = nyope;
isTypeOf(ambiguous);
isTypeOf(nanny);
isTypeOf(stringy);

//5. Add 2 numbers together in javascript.
function addNumbers(a,b){
  return a+b;
};
console.log(addNumbers(6,4));

//6, 7, 8. Prints out "Both are TRUE" only when 2 things are true.

let a = 7;
let b = 5;

  if (a === 7 && b === 5){
    console.log('Both are TRUE');
  } else if (a === 6 || b ===5){
    console.log('One is TRUE');
  } else {
      console.log('Neither is TRUE');
    }
