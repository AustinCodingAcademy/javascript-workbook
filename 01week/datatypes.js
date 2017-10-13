`use strict`

//returns current date and time
//create a function that inputs the year, month, and day
//make new var to store the today var and toDateString method
//use var today with toDateString method

function dateDisplay(year, month, date) {
  var today = new Date(year, month, date);
  return today.toDateString();
}

dateDisplay(1985, 10, 1);

//create a function with one argument.
//the argument should be a number
//return the argument with the toString() method to make the number a string

function toNumber(number) {
  return number.toString()
}

toNumber(13);

//create a fucntion that receives one argument
//argument should be a string
//use parseInt() method on argument to pull a number out

function stringNum(str){
  return parseInt(str);
}

stringNum('15 years');

//create a function with one argument
//use the typeOf method on the argument and return the result

function dataType(dT){
  return typeof(dT);
}

dataType(`words words words`);

//Create a function with two arguments
//Inside the function, add the two var together
//Use parseInt() to take the number out of the string

function add(numOne, numTwo) {
  return parseInt(numOne) + parseInt(numTwo)
}

add(`13`, `17`);

//write a function that returns a true if two var are truthy
//if both var are true, show "nope"
//if both var are false, also show "nope"
// if one is false and one is true, show "yep!"

function truest(thingOne, thingTwo) {
    if ((thingOne === true && thingTwo === true) || (thingOne === false && thingTwo === false)){
    return `nope`;
  } else {
    return 'yep!';
  }
}

truest(true, false);

//write a function with two arguments
//if both arguments are false, show a confirmation message
//if either argument is true, return a negative response

function womp(dumb, dumber) {
  if (dumb === false && dumber === false) {
    return `yes, they're both false`
  } else {
    return 'nah, try again'
  }
};

womp(false, true);
