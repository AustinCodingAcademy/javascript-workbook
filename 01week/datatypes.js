// Write a JavaScript program to display the current day and time.
console.log('----------------------');
console.log('----------------------');

let date = new Date();

function showDate() {
  console.log(date);
}

showDate();

console.log('----------------------');
console.log('----------------------');


// Write a JavaScript program to convert a number to a string.
let num = 115;
let num2 = 178;
console.log(typeof num);
console.log(typeof num2);

function numToString(number) {
  console.log(Object.prototype.toString.call(number.toString()));
}

numToString(num);
numToString(num2);

console.log('----------------------');
console.log('----------------------');


// Write a JavaScript program to convert a string to a number.
let three = '3';
let four = '4';
console.log(typeof(three));
console.log(typeof(four));

function stringToNumber(num) {
  console.log(Object.prototype.toString.call(Number(num)));
}

stringToNumber(three);
stringToNumber(four);


console.log('----------------------');
console.log('----------------------');

// Write a JavaScript program that takes in different dataypes and prints out whether they are a:

// Boolean
let foo = true;

function booTest(isBoo) {
  console.log(Object.prototype.toString.call(isBoo));
}

booTest(foo);

// Null
let nada = null;

function zeroSet(whatIs) {
  console.log(Object.prototype.toString.call(whatIs));
}

zeroSet(nada);

// Undefined
let limbo;

function dante(firstDecent) {
  console.log(Object.prototype.toString.call(firstDecent));
}

dante(limbo);

// Number
let x = 88;

function crazyEight(num) {
  console.log(Object.prototype.toString.call(num));
}

crazyEight(x);

// NaN
let y = 'seven';

function makeNotNumber(not) {
  if(isNaN(not)) {
    console.log(`The string \"${not}\" is Not a Number.`);
  }
}

makeNotNumber(y);

// String
let anything = 'something';

function whatString(str) {
  console.log(Object.prototype.toString.call(str));
}

whatString(anything);


console.log('----------------------');
console.log('----------------------');

// Write a JavaScript program that adds 2 numbers together.
let a1 = 5;
let a2 = 7;

function add(num1, num2) {
  console.log(num1 + num2);
}

add(a1, a2);

console.log('----------------------');
console.log('----------------------');

// Write a JavaScript program that runs only when 2 things are true.

let player1 = 'Jake';
let player2 = 'John';

function nameLength(name1, name2) {
  if(!!name1.length === !!name2.length && !!name1.charAt(0) === !!name2.charAt(0)) {
    console.log(`${name1} has the same amount of letters as ${name2}. Also, ${name1} and ${name2} start with the same letter.`);
  } else {
    console.log(`${name1} is not the same length as ${name2}, or the names start with a different letter.`);
  }
}

nameLength(player1, player2);


console.log('----------------------');
console.log('----------------------');

// Write a JavaScript program that runs when 1 of 2 things are true.

let abc = '6';
let def = 6;

function isSame(first, second) {
  if(first == second || first === second) {
    console.log(`${abc} and ${def} look the same to JavaScript with the == comparison, even though one is a string and one is a number. Bad JavaScript. ;)`);
  } else {
    console.log(`${abc} and ${def} are anything other than the same number in string or number form.`)
  }
}

isSame(abc, def);


console.log('----------------------');
console.log('----------------------');

// Write a JavaScript program that runs when both things are not true.

let pigs = 'oink';
let cats = 'meow';

function animalSounds(first, second) {
  if(pigs !== 'fly' && cats !== 'bark') {
    console.log('The world makes sense.')
  } else {
    console.log('uh oh.')
  }
}

animalSounds(pigs, cats);

console.log('----------------------');
console.log('----------------------');

