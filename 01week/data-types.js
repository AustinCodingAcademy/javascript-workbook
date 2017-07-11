'use strict';
// the following function satisfies item 1

function displayDateAndTime() {
  var currentDateAndTime = new Date();
  console.log(currentDateAndTime);
}

displayDateAndTime();

// the following function satisfies item 2

function changeToString () {
  var num = prompt('Please enter a number.');
  var myString = num.toString();
  console.log(myString);
}

changeToString();

// the following function satisfies item 3

function changeToNumber() {
  var myString = prompt('Please enter a number');
  var num = parseInt(myString);
  console.log(typeof num + '' + num);
}

changeToNumber();

// the following function satisfies item 4

function getType(data) {
  return typeof (data);
}

getType('bob');

// the following function satisfies item 5

function addNumbers (num1, num2) {
  return num1 + num2;
}

addNumbers(2,30.6);

// the following function satisfies items 6-8

function makeFood() {
  var beans = prompt('Would you like beans? Y/N.')
  var rice = prompt('Would you like rice? Y/N.')
  beans = beans.toLowerCase();
  rice = rice.toLowerCase();
  if (beans === 'y' && rice === 'y') {
    console.log('Burrito');
  } else if (beans === 'n' || rice === 'n') {
    console.log('Sorry, you have to like both of them.');
  } else {
    console.log('Try again, and say you like both ingredients.');
  }
}

makeFood();
