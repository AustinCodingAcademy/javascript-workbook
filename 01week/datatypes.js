'use strict'
//1. Write a JavaScript program that will display current date and time.

function getTime(){
const currentDate = new Date(),
      day = currentDate.getDate(),
      month = currentDate.getMonth() + 1,
      year = currentDate.getFullYear();
      hours = currentTime.getHours(),
      minutes = currentTime.getMinutes();

document.write(day + "/" + month + "/" + year)

if (minutes < 10) {
minutes = "0" + minutes;
  }

document.write(hours + ":" + minutes)
}

//2.Write a JavaScript program that will change a number to string.

function numToString(num){

const num=6;
const x=num.toString();
}

//3.Write a JavaScript program that will change a string to number.

convertStringToNumber(str){
  return new Number(str);
}

//console.log will show convertStringToNumber('4') returning (4)

//4.Write a JavaScript program that takes in different datatypes and prints out whether they are a:Boolean,Null,Undefined,Number,NaN,String

function WhatsMyType(arg){
  return type of arg;
}

//5.Write a JavaScript program that adds 2 numbers together.
const x = 4;
const y = 8;
const z = x + y;

//expected output: z will equal 12

//6.Write a JavaScript program that runs only when 2 things are true.

function bothArgumentsAreTrue(arg1, arg2){
  if(arg1 && arg2){
    return 'both are true'
  }
}

bothArgumentsAreTrue(4, null);
bothArgumentsAreTrue(4, 3000);

//7.Write a JavaScript program that runs when 1 of 2 things are true.

function oneThingIsTrue(a){
  if (a > 5) {
    return "good";
  } else {
    return "not good";
  }
}
console.log(oneThingIsTrue(-5));
// expected output: "not good"

//8.Write a JavaScript program that runs when both things are not true.

function bothUntrue(x, y){
   if (x > 0 && y > 9){
     return "true";
   } else {
     return "not true"
   }
}

console.log(bothUntrue(-4,7))
