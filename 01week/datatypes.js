"use strict";
// 1. program for date and time
function returnDate() {
  return new Date();
}
console.log(returnDate());

// 2. convert a number to a string
function num(n) {
  return n.toString();
}
console.log(num(1274));

// 3. convert a string to the number
function stringNum(aString) {
  return parseInt(aString);
}
console.log(stringNum('3'));

// 4. data type
function printoutDataType(argument)  {
  return typeof argument;
}
console.log(printoutDataType(5));

// 5. program that adds 2 numbers together
function addNum(a,b) {
  return a + b;
}
console.log(addNum(8,7));

// 6.  program that runs only when 2 things are true
function checkTrue (x,y){
  if(x && y){
    return true;
  }
}
console.log(checkTrue(null,8));

// 7. program that runs when 1 of 2 things are true
function checkTwoTrue (a,b){
  if(a || b){
    return true;
  }
}
console.log(checkTwoTrue(55,14));

// 8. program that runs when both things are not true
function checkNotTrue (x,y){
  if(!x && !y){
    return true;
  }
}
console.log(checkNotTrue(null,null));
