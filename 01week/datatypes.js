'use strict'

//Write a JavaScript program to display the current day and time.
//function that receives time and date and displays upon request
// Wrap this in a function. "Write a program" === make a function


  function firstProgram (){
    const d = new Date();
    const n = d.toLocaleString();
     return  console.log("Current date and time is: " + n);
  }

firstProgram();



  // Write a JavaScript program to convert a number to a string.
//assign variable, write function that receives a number and converts it to a string, using num.toString();
// Wrap this in a function. "Write a program" === make a function.Also this wouldn't convert the number to a string.

function secondProgram() {
const fifteen = 15;
const nts = fifteen.toString();
console.log("These will not add: " + (15 + nts))
}

secondProgram();



//Write a JavaScript program to convert a string to the number.
//parseint a string argumqewriopnt and return an interger
// Wrap this in a function. "Write a program" === make a function. Make your variable names descriptive.

function thirdProgram() {
  const convertThis = parseInt("5");
return console.log("These will add: " + (5 + convertThis));
}

thirdProgram();

 //Write a JavaScript program that takes in different datatypes and prints out whether they are a:
// Boolean
// Null
// Undefined
// Number
// NaN
// String
//function takes in argument and use typeof() to declare what kind of datatype it is
// Wrap this in a function. "Write a program" === make a function.


function fourthProgram(){
  const verified = true;
  const nullified = null;
  const myNumber = 12;
  const myNotANumber = "twelvish";
  const myString = "adc";

console.log("This is a type of: " + typeof(verified));
console.log("This is a type of: " + nullified);
console.log("This is a type of: " + typeof(b));
console.log("This is a type of: " + typeof(5));
console.log("This is a parseInted string: " + parseInt(myNotANumber));
console.log("This is a type of: " + typeof('myString'));
}

fourthProgram();

// Write a JavaScript program that adds 2 numbers together.
//function that adds intergers and numbers and displays the result, use +


function fifthProgram() {
  const adds2numbers = 1 + 1;
console.log("Here's what happens when you add two numbers: " + adds2numbers);
}

fifthProgram();


//Write a JavaSc\gh'ript program that runs only when 2 things are true.
//function that has If var && variable
// This function runs if hair is black and eyes are brown. I need it to run if hair evaluates to true and eyes evaluate to brown.


function sixthProgram(hair, eyes, arms){
  let theyHaveBlackHair = false;
if( hair === "black"){
 theyHaveBlackHair = true;
}
   if( theyHaveBlackHair === true && eyes === "brown" && arms < 3){
    console.log('these things are all true')

  }
}

sixthProgram("black","brown",2);

// Write a JavaScript program that runs when 1 of 2 things are true.
// function that has an if statement using 2 variables with a ||
// This function runs if oldest is the boolean true or if youngest is the boolean true. I need it to run if oldest EVALUATES to true or if youngest EVALUATES to true.

function seventhProgram(oldest, youngest){
  if(oldest > 17 || youngest > 25){
    console.log("One of these two are true")
  }
}
seventhProgram(16,27);

//Write a JavaScript program that runs when both things are not true.
//function with if statement using 2 variables with !true
// This function runs if vegan is not the boolean true or if vegetarian is not the boolean true. I need it to run if vegan EVALUATES to false and if vegetarian EVALUATES to false
function boththingsarenottrue(vegan, vegetarian) {
  if(vegan == false && vegetarian === false){
    console.log("carnivore!")
  }
}

boththingsarenottrue(0,false);
