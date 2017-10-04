'use strict';

const day = new Date();
console.log(day);

const numToStr = 1337;
const nTS = numToStr.toString();
console.log(nTS);

const strToNum = parseInt("112358");
console.log(strToNum);

console.log(typeof true);
console.log(typeof null); //null is an Object for some reason//
console.log(typeof undefined);
console.log(typeof NaN);
console.log(typeof "Words")

const addi = 4+6;
console.log(addi);


const oner = 1;
const twoer = 2;
const fourer = 4;

if (oner+oner === twoer && twoer+twoer === fourer) {
  console.log("It Works");
	} else {
  console.log("It doesn't work");
}

if (oner+oner === twoer || twoer+twoer === fourer) {
  console.log("It Works");
	} else {
  console.log("It doesn't work");
}

if (oner+twoer === fourer && fourer+fourer === oner) {
  console.log("It works");
	} else {
  console.log("It doesn't work");
}

