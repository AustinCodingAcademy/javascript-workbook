'use strict'

//Write a JavaScript program to display the current day and time.
//function that receives time and date and displays upon request
// Wrap this in a function. "Write a program" === make a function


function firstProgram() {
  const d = new Date();
  const n = d.toLocaleString();
  return console.log("Current date and time is: " + n);
}

firstProgram();



// Write a JavaScript program to convert a number to a string.
//assign variable, write function that receives a number and converts it to a string, using num.toString();
// Wrap this in a function. "Write a program" === make a function.Also this wouldn't convert the number to a string.

function secondProgram(number) {
  const nts = number.toString();
  console.log("These will not add: " + (15 + nts))
}

secondProgram(15);



//Write a JavaScript program to convert a string to the number.
//parseint a string argumqewriopnt and return an interger
// Wrap this in a function. "Write a program" === make a function. Make your variable names descriptive.

const thirdProgram = (string) => {
  const convertThis = parseInt(string);
  return console.log(convertThis);
}

thirdProgram('023');

//Write a JavaScript program that takes in different datatypes and prints out whether they are a:
// Boolean
// Null
// Undefined
// Number
// NaN
// String
//function takes in argument and use typeof() to declare what kind of datatype it is
// Wrap this in a function. "Write a program" === make a function.


function fourthProgram(input) {

  console.log("This is a type of: " + typeof(input));

}

fourthProgram(5);

// Write a JavaScript program that adds 2 numbers together.
//function that adds intergers and numbers and displays the result, use +


function fifthProgram(x,y) {
  const adds2numbers = x + y;
  console.log("Here's what happens when you add two numbers: " + adds2numbers);
}

fifthProgram(2,3);


//Write a JavaSc\gh'ript program that runs only when 2 things are true.
//function that has If var && variable
// This function runs if hair is black and eyes are brown. I need it to run if hair evaluates to true and eyes evaluate to brown.


function sixthProgram(hair, eyes) {
  if (hair && eyes) {
    console.log("congrats both things are true");
  }
}

sixthProgram("black", "brown");

// Write a JavaScript program that runs when 1 of 2 things are true.
// function that has an if statement using 2 variables with a ||
// This function runs if oldest is the boolean true or if youngest is the boolean true. I need it to run if oldest EVALUATES to true or if youngest EVALUATES to true.

function seventhProgram(oldest, youngest) {
  if (oldest || youngest) {
    console.log("One of these two are true")
  }
}
seventhProgram(16, 27);

//Write a JavaScript program that runs when both things are not true.
//function with if statement using 2 variables with !true
// This function runs if vegan is not the boolean true or if vegetarian is not the boolean true. I need it to run if vegan EVALUATES to false and if vegetarian EVALUATES to false
function boththingsarenottrue(vegan, vegetarian) {
  if (!vegan && !vegetarian) {
    console.log("carnivore!")
  }
}

boththingsarenottrue(0, 0);
