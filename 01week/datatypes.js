'use strict'

//display the current date and time
let d = new Date ();
console.log(d);

//convert a number to a string
let num = 33;
let g = num.toString();

console.log(g);

//convert a string to the number
let uhoh = 99;
Number(uhoh);


//create a program that displays the type of variable

//boolean

let waterIsGewd = true;
console.log("waterIsGewd: ");
typeof waterIsGewd;

//null

let noValue = null;
console.log("noValue: ");
typeof noValue;

//undefined

let uhhh;
console.log("uhhh: ");
typeof uhhh;

//number
let magic = 333;
console.log("magic: ");
typeof magic;

//NaN
let pita = Math.sqrt(-5);
console.log("pita: ");
typeof pita;

//string
let myName = 'grant';
console.log("grant: ");
typeof grant;

//add 2 numbers together
let a = 5;
let b = 4;

console.log(a + b "= 5+ 4")

//only runs when both are true

if(a > 1 && b > 1){
  console.log('Hooray for numbers!')
};

//only runs when one is true
if(a > 0 || b > 100){
  console.log('Only one is right, but who cares?')
};

//only runs when both are not true
if(!(a > 100 && b > 100)){
  console.log('both not true')
};