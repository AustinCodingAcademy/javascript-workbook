`use strict`

//returns current date and time
//make a today var, which is assigned a new date instance
//make new var to store the today var and toDateString method
//use var today with toTimeString method

function dateDisplay() {
  var today = new Date(1985, 10, 1);
  console.log(today.toDateString());
}

dateDisplay();

//create a function that will supply the resulting string
//create a var to convert.
//input a number into var convert
//use convert and toString() method to make the number a string

function toNumber() {
  var num = 13
  return num.toString()
}

toNumber();

//set var to a string
//use parseInt() method

function stringNum(){
var str = `15 Years`
return str.parseInt()
}

stringNum();

//tells what type of datatype your input is
//create a variable of any main datatype
//use the typeOf method on the variable

var dataType = `words words words`
var result = console.log(typeof(dataType))

//Create two var that can be a string or number, the string must contain a number though
//Create a function with the two var
//Inside the function, add the two var together
//Use parseInt() to take the number out of the string

function add(numOne, numTwo) {
  var total =  (parseInt(numOne) + parseInt(numTwo));
  return total('13', '17')
}

//write a function that returns a true if two var are truthy
//if both var are true, show "nope"
//if both var are false, also show "nope"
// if one is false and one is true, show "yep!"

function truest(thingOne, thingTwo) {
  if (thingOne === true && thingTwo === true) {
    return `nope`
  } else if (thingOne === false && thingTwo === false) {
    return 'nope'
  } else {
    return 'yep!'
  }
};

//write a function that only runs when both var are false
//if both var are false, show a confirmation message

function womp(dumb, dumber) {
  if (dumb === false && dumber === false) {
    return `yes, they're both false`
  }
};
