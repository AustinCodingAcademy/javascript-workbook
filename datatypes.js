'use strict';
function getDate () {
  return new Date();
}

function convertToString (num) {
  return num.toString();
}

function convertToNumber (str) {
 return parseInt(str);
}

getDate();
convertToString(3486589656850);
convertToNumber('7656785864');

console.log(typeof NaN);

console.log(typeof false);

console.log(typeof zero);

console.log(typeof 'My name is Meghan');

console.log(typeof NULL);

console.log(typeof function () {});

console.log(typeof {location: 'Austin', age: 26});

function add () {
  return parseInt(2, 3);
}
