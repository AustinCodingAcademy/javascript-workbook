"use strict";
// 1. program for date and time
function returnDate() {
  const now = new Date();
  return now;
}
console.log(returnDate());

// 2. convert a number to a string
const num = 1578;
const n = num.toString();
console.log(num);

// 3. convert a string to the number
const aString = "Mynameisryan";
console.log(aString.length);

// 4. data type
function printoutDataType(argument)  {
  return typeof argument;
}
console.log(printoutDataType(5));

// 5. program that adds 2 numbers together
const x = 10+5;
console.log(x);

// 6.  program that runs only when 2 things are true
function checkTrue (){
  if(4 > 2 && 10 < 15){
    return true;
  }
}
console.log(checkTrue());

// 7. program that runs when 1 of 2 things are true
function checkTrue (){
  if(25 > 2 || 17 < 15){
    return true;
  }
}
console.log(checkTrue());

// 8. program that runs when both things are not true
function checkFalse (x,y){
  if(!x && !y){
    return true;
  }
}
console.log(checkFalse(null,null));
