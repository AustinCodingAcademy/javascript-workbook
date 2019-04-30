'use scrict';

// Write a JavaScript program to display the current day and time.
var curDate = new Date();
console.log(curDate.toLocaleString('en-us'));
document.getElementById('date').innerHTML = (curDate);

// Write a JavaScript program to convert a number to a string.
var firstNum = 5;
var strNum = String(firstNum);
console.log(typeof strNum);
document.getElementById('numString').innerHTML = (strNum);

// Write a JavaScript program to convert a string to the number.
var str = 7;
var num = Number(str);
console.log(typeof num);
document.getElementById('stringNum').innerHTML = (num);

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
// Boolean 
var myBoo = true;
document.getElementById('boolean').innerHTML = (myBoo);

// Null
var myNull = null;
document.getElementById('myNull').innerHTML = (myNull);

// Undefined
var myUnd
document.getElementById('undefined').innerHTML = (myUnd);

// Number
var myNum = 17;
document.getElementById('number').innerHTML = (myNum);

// NaN
var noNum = 0/0;
document.getElementById('nan').innerHTML = (noNum);

// String
var myStr = "6";
document.getElementById('myStrNum').innerHTML = (myStr);

// Write a JavaScript program that adds 2 numbers together.
var myNum = 17;
var myNumTwo = 3;
console.log(myNum + myNumTwo);
document.getElementById('add').innerHTML = (myNum + myNumTwo);

// Write a JavaScript program that runs only when 2 things are true.
var strOne = true;
var strTwo = true;

if(strOne==true && strTwo==true) {
    console.log("Both is true");
}
document.getElementById('twoTrue').innerHTML = (strOne==true && strTwo==true);

// // Write a JavaScript program that runs when 1 of 2 things are true.
var strOne = true;
var strTwo = false;

if(strOne==true || strTwo==true) {
    console.log("One is true");
}
document.getElementById('oneTrue').innerHTML = (strOne==true || strTwo==true);

// // // Write a JavaScript program that runs when both things are not true.
var strOne = false;
var strTwo = false;

if(strOne==true && strTwo==true) {
    console.log("Both are false");
}
document.getElementById('false').innerHTML = (strOne==false && strTwo==false);
