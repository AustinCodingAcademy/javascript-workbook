// Displays current date and time
var now = new Date();
console.log("The current date and time is", now);

// Converts number to a string
var number = 7;
var n = number.toString();
console.log(n);

// Converts string to a number
var number = "7";
console.log(number);

// Prints out Boolean datatype
var x = true;
console.log(typeof x);

// Prints out null datatype
var x = null;
console.log(x);

// Prints out undefined datatype
var x = undefined;
console.log(typeof x);

// Prints out number datatype
// var x= 512;
console.log(typeof x);

// Prints out NaN datatype
var person = 5;
if (person !== 3) {
  console.log("NaN");
}

// Prints out string datatype
var x = "number";
console.log(typeof x);

// Adding two numbers together
var x = 5;
var y = 4;
console.log(x + y);

// Program runs when two things are true
var myColor = true;
var yourColor = true;
if (myColor && yourColor) {
  console.log("True");
}

// Program runs when one of two things are true
var myNum = 5;
var yourNum = 3;
if (myNum > 2 || yourNum > 1) {
  console.log("One Thing is true!");
}

// Program runs when both things are not true
var myNum = 5;
var yourNum = 3;
if (myNum > 2 || yourNum > 5) {
  console.log("Both are not truthy!");
}
