'use strict';

//using console logs to test

//simple date and time
const day = new Date();
console.log(day);

//turning number into string using '.toString'
const numToStr = 1337;
const nTS = numToStr.toString();
console.log(nTS);

//turning string into number using 'parseInt'
const strToNum = parseInt("112358");
console.log(strToNum);

//typeof commands inside console logs
console.log(typeof true);
console.log(typeof null); //null is an Object for some reason//
console.log(typeof undefined);
console.log(typeof NaN);
console.log(typeof "Words");

//simple math
const addi = 4+6;
console.log(addi);

//some consts to use for the following code
const oner = 1;
const twoer = 2;
const fourer = 4;

//if else function with && operator
if (oner+oner === twoer && twoer+twoer === fourer) {
  console.log("It Works");
	} else {
  console.log("It doesn't work");
}

//if else function with || operator
if (oner+oner === twoer || twoer+twoer === fourer) {
  console.log("It Works");
	} else {
  console.log("It doesn't work");
}

//if else function with && operator again, but with false conditions
if (oner+twoer === fourer && fourer+fourer === oner) {
  console.log("It works");
	} else {
  console.log("It doesn't work");
}