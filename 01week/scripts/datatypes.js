//Display the current day and time in javascript.
var date = new Date();
console.log(date.toLocaleString('en-us'));

function displayDate(){
  document.getElementById("showDate").innerHTML = date.toLocaleString('en-us');
}

//Convert a number, 7 to a string, "7" in javascript.
let num = 7;
let string = num.toString();

console.log(string);

function numToString(){
  document.getElementById("string").innerHTML = string;
}

//Convert a string, "7" to the number, 7 in javascript.
num = parseInt(string);

console.log(num);

function stringToNum(){
  document.getElementById("num").innerHTML = num;
}

//Add 2 numbers together in javascript.
let num2 = 100;

console.log(num + num2);

function addTwoNums(){
  document.getElementById("twoNums").innerHTML = num + num2;
}

//Prints out "Both are TRUE" only when 2 things are true.
function bothAreTrue(){
  let num3 = 3000;
  let num4 = 45;
  if (Boolean(num3) && Boolean(num4)){
    console.log('Both are TRUE');
    document.getElementById("bothTrue").innerHTML = 'Both are TRUE';
  }
}

//Prints out "One of these is TRUE" when 1 of 2 things are true.
function oneIsTrue(){
  let num3 = 3000;
  let num4 = 0;
  if (Boolean(num3) || Boolean(num4)){
    console.log('One of these is TRUE');
    document.getElementById("oneTrue").innerHTML = 'One of these is TRUE';
  }
}

//Prints out "Neither is TRUE" when both things are not true.
function neitherIsTrue(){
  let num3 = '3000';
  let num4 = '45';
  if (Boolean(num3) || Boolean(num4)){
    console.log('Neither is TRUE');
    document.getElementById("neitherTrue").innerHTML = 'Neither is TRUE';
  }
}

//Create one variable for each of the data types below:
// Boolean i.e. var myBool = false;
// Null
// Undefined
// Number
// NaN
// String
let myBool = false;
let myNull = null;
let myUndefined;
let myNum = 100;
let myNaN = '1' * 1;
let myString = '1';

console.log(typeof myBool);
console.log(typeof myNull);
console.log(typeof myUndefined);
console.log(typeof myNum);
console.log(typeof myNaN);
console.log(typeof myString);

function printAllData(){
  document.getElementById("booleanData").innerHTML = typeof myBool;
  document.getElementById("nullData").innerHTML = typeof myNull;
  document.getElementById("undefinedData").innerHTML = typeof myUndefined;
  document.getElementById("numData").innerHTML = typeof myNum;
  document.getElementById("nanData").innerHTML = typeof myNaN;
  document.getElementById("stringData").innerHTML = typeof myString;
}
