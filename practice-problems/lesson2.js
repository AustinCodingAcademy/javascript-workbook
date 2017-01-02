//1. In your own words, explain what conditionals do.

//Answer: Conditionals list a conditional statement, such as "If (this) {do this};".




//2. Write a conditional statement that prints out “good job” if the variable answer is true and “try again” if the variable answer is false.

//Answer:

if ( "Barbara".length===7)
{
    console.log("good job");
}

    // What should we do if the condition is false? Fill in here:
    else {
    console.log("try again");
}




//3. Write a conditional statement that prints out “divisible by 2”, “divisible by 3”, “divisible by 4”, or “divisible by 5” if a number is divisible by each of these numbers, respectively.

//Answer:
function divisibleNumber(number) {
  if (number % 2 ===0) {
    console.log ("divisible by 2");
  }
  if (number % 3===0) {
    console.log ("divisible by 3");
  }
  if (number % 4===0) {
    console.log ("division by 4");
  }
  if (number % 5===0) {
    console.log ("divisible by 5");
  }
}




//4. Write the code for a function that prints out the text passed into the function as an argument.

//Answer:
function printText(argument1, argument2) {
  console.log (argument1);
}




//5. Create a function that prints out the average of a set of numbers.

//Answer:
function average(number1, number2) {
  console.log (sum/2);
}
var sum = number1 + number2;



//6. Call your above function and write the code to make the average print out.

//Answer:
function average(number1, number2) {
  console.log (sum/2);
}
var sum = number1 + number2;
var number1 = 4;
var number2 = 2;
