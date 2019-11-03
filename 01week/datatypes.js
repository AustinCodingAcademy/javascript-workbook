// Datatypes

var today = new Date();
var day = today.getDay();
var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
console.log("Today is : " + daylist[day] + ".");
// get the hour for a given date
var hour = today.getHours();
// get the minutes in the specified date 
var minute = today.getMinutes();
// get the seconds in the specified date
var second = today.getSeconds();
// determine AM or PM based on 12 hour clock
var prepand = (hour >= 12)? " PM ":" AM ";
hour = (hour >= 12)? hour - 12: hour;
if (hour===0 && prepand===' PM ') 
{ 
if (minute===0 && second===0)
{ 
hour=12;
prepand=' Noon';
} 
else
{ 
hour=12;
prepand=' PM';
} 
} 
if (hour===0 && prepand===' AM ') 
{ 
if (minute===0 && second===0)
{ 
hour=12;
prepand=' Midnight';
} 
else
{ 
hour=12;
prepand=' AM';
} 
} 
// log results
console.log("Current Time : "+hour + prepand + " : " + minute + " : " + second);

// Write a JavaScript program to convert a number to a string.
let a = 7;
// turn it into a string
a.toString();
console.log(a);

// Write a JavaScript program to convert a string to the number.
let b = '7';
console.log(parseInt(b));

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
// Boolean
// Null
// Undefined
// Number
// NaN
// String
// create an array of variables
let un;
let nana = 0/0;
let nothing = null;
var dataType = ['David', 29, true, un, nothing, nana];
let start = 0;
  // function invocation
dataType.forEach(function(element) {
  console.log(typeof element);
  start++;
  });

console.log(typeof dataType);

// Write a JavaScript program that adds 2 numbers together.
let c = 2;
let d = 25;
let sum = c + d;
// log sum
console.log(sum);

// define variables
let doggo = 'Jax';
let hungry = true;
let cat = null;
let friends;
//  determine output using various logical operators
function isHungry() {
  if (doggo && hungry === true) {
    console.log("Both are true");
  } else if (doggo || hungry === true) {
    console.log("One of these is true");
  } else if (doggo && hungry !== true) {
    console.log("Neither of these are true");
  }
}