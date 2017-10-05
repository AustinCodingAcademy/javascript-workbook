`use strict`

//returns current date and time
//make a today var, which is assigned a new date instance
//make new var to store the today var and toDateString method
//use var today with toTimeString method

var today = new date(dateString);
console.log(today);

//create a var to convert.
//input a number into var convert
//use convert and toString() method to make the number a string

var num = 13
var n = num.toString

//first method to convert string to number
//input a string into parseInt() method and returns number
//or...
//set var to a string
//use Number() method

var str = `15 Years`
var int = parseInt(str)

//tells what type of datatype your input is
//create a variable of any main datatype
//use the typeOf method on the variable

var dataType = `words words words`
var result = typeOf(dataType)

//make two variables that use parseInt() method
//add the two variables with ansD.

var numOne = parseInt(`44`)
var numTwo = parseInt(`55`)
ansD.value = numOne + numTwo

//write a function that returns a true if two var are truthy
//if both var are true, show "nope"
//if both var are false, also show "nope"
// if one is false and one is true, show "yep!"

function truest(thingOne, thingTwo) {
    if (thingOne && thingTwo === `true`){
    return `nope`
  } else if (thingOne && thingTwo === `false`) {
    return 'nope'
  } else {
    return 'yep!'
  }
};

//write a function that only runs when both var are false
//if both var are false, show a confirmation message

function womp(dumb, dumber) {
  if (dumb && dumber === `false`) {
    return `yes, they're both false`
  }
};
