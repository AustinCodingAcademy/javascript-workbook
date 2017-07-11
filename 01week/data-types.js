'use strict';
// the following function satisfies item 1

function displayDateAndTime() {
  return new Date();
}

console.log(displayDateAndTime());

// the following function satisfies item 2

function changeToString (num) {
  var myString = num.toString();
  console.log(myString);
}

changeToString(6);

// the following function satisfies item 3

function changeToNumber(myString) {
  return parseInt(myString);
}

console.log(changeToNumber('2017'));

// the following function satisfies item 4

function getType(data) {
  return typeof data;
}

getType(30);

// the following function satisfies item 5

function addNumbers (num1, num2) {
  return num1 + num2;
}

addNumbers(2,30.6);

// the following function satisfies items 6-8

function makeFood(beans, rice) {
  if (beans === 'y' && rice === 'y') {
    console.log('Burrito');
  } else if (beans === 'n' || rice === 'n') {
    console.log('Sorry, you have to like both of them.');
  } else {
    console.log('Try again, and say you like both ingredients.');
  }
}

makeFood('y', 'y');
