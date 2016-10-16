//1. In your own words, explain what conditionals do.

//Answer: helps to perform different actions in different situations




//2. Write a conditional statement that prints out “good job” if the variable answer is true and “try again” if the variable answer is false.

//Answer:



if (true) {
console.log("good job")
} else {
  console.log("try again")
}
}



//3. Write a conditional statement that prints out “divisible by 2”, “divisible by 3”, “divisible by 4”, or “divisible by 5” if a number is divisible by each of these numbers, respectively.

//Answer:

function isDivisble(number) {
  if(number % 4 === 0) {
    console.log("divisible by 4");
  } else if (number % 2 === 0) {
    console.log("divisible by 2");
  } else if (number % 3 === 0) {
    console.log("divisble by 3");
  } else (number % 5 === 0) {
    console.log("divisible by 5");
  }
}




//4. Write the code for a function that prints out the text passed into the function as an argument.

//Answer:
function print(text) {
  var text = "hi";
  return text;
}


//5. Create a function that prints out the average of a set of numbers.

//Answer:
function average(number1, number2) {
var sum = 0;
sum += (number1 + number2);
return sum / 2;
}


//6. Call your above function and write the code to make the average print out.

//Answer:
function average(number1, number2) {
var sum = 0;
sum += (number1 + number2);
return sum / 2;
}

console.log(average(80, 85));
