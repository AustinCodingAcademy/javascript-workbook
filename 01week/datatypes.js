'use strict';

const today=new Date();
const day = today.getDay();
const dayString=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
console.log(dayString[day]);
const hour= today.getHours();
const minute= today.getMinutes();
const second= today.getSeconds();

console.log(+hour+":"+minute)
//Create a program which will display the day and time. Find out why the day and time are returning '4'.
const num=7;
const numString=num.toString();
//Create a program that converts a number to a string.
const word="777Javascript";
const integer=parseInt(word, 10);
//Create a program that converts a string to a number. Somethings missing from here.
console.log(typeof 313);
//Create a program that takes in different data types and prints out the what type they are. Remember any quotations will make it a string.
const num1=5
const num2=3.14159
const numSum=num1+num2;
console.log(numSum);
//Write a program that adds two different numbers together. "Return" is giving a syntax error.
function intCheck(int1,int2){
  if (int1>7 && int2<7)
  return "true"
}
console.log(intCheck(8,3));
//Write a program that runs only when 2 things are true. Make sure both integers are within the constraints through testing for negative.
function oneOrTwo(x,y){
  if (x=2 && y>15)||(y>14)
  return "Good"
}
console.log(oneOrTwo(3,7));
//Write a program that runs if 1 or 2 things are true. Make use of or symbol. Find syntax error.
function falsy(a,b){
  if(a>5 && b<63)
  return;
  else(return "OK")
}
console.log(falsy(4,77));
//Write a program that runs if both things are not true.
