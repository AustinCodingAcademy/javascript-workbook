'use strict'

//Write a JavaScript program to display the current day and time.
//function that receives time and date and displays upon request
var d = new Date();
var n = d.toLocaleString();
  console.log(n);

  // Write a JavaScript program to convert a number to a string.
//assign variable, write function that receives a number and converts it to a string, using num.toString();
num = 8;
console.log(num.toString());

//Write a JavaScript program to convert a string to the number.
//parseint a string argumqewriopnt and return an interger
var a = parseInt("5");
console.log(a);

 //Write a JavaScript program that takes in different datatypes and prints out whether they are a:
// Boolean
// Null
// Undefined
// Number
// NaN
// String
//function takes in argument and use typeof() to declare what kind of datatype it is
console.log(typeof(true));
var foo = null;
console.log(foo);
console.log(typeof(b));
console.log(typeof(5));
console.log(parseInt(foo));
console.log(typeof(''));


// Write a JavaScript program that adds 2 numbers together.
//function that adds intergers and numbers and displays the result, use +
var adds2numbers = 1 + 1;
console.log(adds2numbers);

//Write a JavaSc\gh'ript program that runs only when 2 things are true.
//function that has If var && variable

function twothingsaretrue(hair, eyes){
  if(hair == "black" && eyes == "brown"){
    console.log('both things are true')
  }
}

twothingsaretrue("black","brown");

// Write a JavaScript program that runs when 1 of 2 things are true.
// function that has an if statement using 2 variables with a ||

function oneoftwoaretrue(oldest, youngest){
  if(oldest == true || youngest == true){
    console.log("congrats, you're one of moms favorites! one of the two is true")
  }
}
oneoftwoaretrue(false,false);
oneoftwoaretrue(true,false);

//Write a JavaScript program that runs when both things are not true.
//function with if statement using 2 variables with !true
function boththingsarenottrue(vegan, vegetarian) {
  if(vegan == !true && vegetarian == !true){
    console.log('congrats you are a meat eater! both things are not true')
  }
}

boththingsarenottrue(true,true);
boththingsarenottrue(false,true);
boththingsarenottrue(false,false);
