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
let typeBool = isTypeOf(bool);
let typeNull = isTypeOf(nope);
document.getElementById('dataType').innerHTML = typeNull;

isTypeOf(ambiguous);
isTypeOf(nanny);
isTypeOf(stringy);

//5. Add 2 numbers together in javascript.
function addNumbers(a,b){
  return a+b;
};
let addButt = addNumbers(6,4);
console.log(addButt);
document.getElementById('addNum').innerHTML = addButt;


//6, 7, 8. Prints out "Both are TRUE" only when 2 things are true.
let a = 7;
let b = 5;



if (a === 7 && b === 5){
    document.getElementById('bothTrue').innerHTML = "Both are TRUE!";
  }
// document.getElementById('bothTrue').innerHTML = "Both are TRUE!";

if (a === 6 || b ===5){
  document.getElementById('oneTrue').innerHTML = "One is TRUE!";
}; 
  
if (a != 4 && b!= 6) {
  document.getElementById('neitherTrue').innerHTML = "Neither is TRUE!";
};


