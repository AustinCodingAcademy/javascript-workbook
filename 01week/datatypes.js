//Display the current day and time in javascript.
let time = '1:45 PM';
let day = 'April 1, 2019';

console.log('When this code was written, it was ' + time + ' on ' + day);

//Convert a number, 7 to a string, "7" in javascript.
let num = 7;
let string = num.toString();

console.log(string);

//Convert a string, "7" to the number, 7 in javascript.
num = parseInt(string);

console.log(num);

//Add 2 numbers together in javascript.
let num2 = 100;

console.log(num + num2);

//Prints out "Both are TRUE" only when 2 things are true.
function myFunction(){
  let num3 = 3000;
  let num4 = 45;
  if (Boolean(num3) && Boolean(num4)){
    console.log('Both are TRUE');
  }
}

myFunction();

//Prints out "One of these is TRUE" when 1 of 2 things are true.
function secondFunction(){
  let num3 = 3000;
  let num4 = 0;
  if (Boolean(num3) || Boolean(num4)){
    console.log('One of these is TRUE');
  }
}

secondFunction();

//Prints out "Neither is TRUE" when both things are not true.
function thirdFunction(){
  let num3 = '3000';
  let num4 = '45';
  if (Boolean(num3) || Boolean(num4)){
    console.log('Neither is TRUE');
  }
}

thirdFunction();

//Create one variable for each of the data types below:
// Boolean i.e. var myBool = false;
// Null
// Undefined
// Number
// NaN
// String
let myBool = false;
let myNull = Null;
let myUndefined;
let myNum = 1;
let myNaN = Nan;
let myString = '1';

//Copy/Paste the following variable, function declaration and function invocation into your repl.it:

// your variable
var myBool = false;

// function declaration
function isTypeOf(data) {
  return console.log(typeof data);
}

// function invocation
isTypeOf(myBool);

// replace "myBool" with the other names of your variable each time you run it

// OR copy/paste "isTypeOf()" once for each variable you have and place each variable name inside the "()". Make sure your variables are above your function invocation, else they will be "undefined"!
