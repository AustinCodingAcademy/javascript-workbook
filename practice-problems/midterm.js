//Intermediate Midterm

//Directions: Write your answers in the space provided after the word answer.

//1. What is a data type that can have only the values true or false? Provide an example.

//Answer:




//2. What is a null value? Provide one example.

//Answer:




//3. List and describe 3 more data types used in JS.

//Answer:




//4. Write code that will concatenate 2 strings and a number. Make sure to include how you will print it out.

//Answer:




//5. How would you convert 7.3434343 to a string?

//Answer:




//6. Write the code to  print out the length of the string “I love JS”.

//Answer:




//7. Write a line of code that prompts for user input.

//Answer:




//8. What is strict mode and how do you use it?

//Answer:




//The following is an example of what the next few questions will look like:

//Will the follow lines of code print out true or false?
//console.log(true && true);

//Answer: true


//9. console.log(true && false);

//Answer:




//10. console.log(false && true);

//Answer:




//11. console.log(true && true && false);

//Answer:




//12. console.log(true || false);

//Answer:




//13. console.log(false || true);

//Answer:




//14. console.log(true || true || false);

//Answer:




//15. console.log(!true);

//Answer:




//16. console.log(!undefined);

//Answer:




//17. console.log(!!"Hello");

//Answer:




//18. console.log(!!null);

//Answer:




//19. var x = 7;
//    var y = 5;

//    console.log(x !== y);

//Answer:




//20. What’s the difference between == and ===?

//Answer:




//21. What’s the difference between != and !==?

//Answer:




//22. What does (7 - 4 && 6 + 3) || (7 < 5 || 8 > 4) evaluate to? Explain how you solved your answer.

//Answer:




//23. Write a conditional statement that prints out 'even' when the variable 'number' is even.

//Answer:




//24. Write a conditional statement that prints out “good job” if the variable answer is true and “try again” if the variable answer is false.

//Answer:




//25. Write a conditional statement that prints out “divisible by 2”, “divisible by 3”, “divisible by 4”, or “divisible by 5” if a number is divisible by each of these numbers, respectively.

//Answer:




//Use the following array for questions 28-31.

var colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]


//26. Write code to print out the length of the 'colors' array and then the 3rd color of the array.

//Answer:




//27. Write code to add the color ‘dark-violet’ to the 'colors' array.

//Answer:




//28. Write code to add the color 'orange-yellow' to the 'colors' array between the colors orange and yellow. (So your array will print out red, orange, orange-yellow, yellow, green, blue, indigo, violet, dark-violet)

//Answer:




//29. Write the code to delete ‘orange’ from the array.

//Answer:




//30. Create an object that describes your favorite city. Include properties that have a string, a number, a boolean, and an array as values. Write code to print out one of the properties.

//Answer:




//31. Use a for loop to print out all the multiples of 3 between 1 and 100.

//Answer:




//32. Use a while loop to print out all the multiples of 7 between 1 and 100 in reverse order.

//Answer:




//33. Identify and explain the problem in the code below:

var a = 'Hello';

function helloWorld() {
    var b = 'World';
    return a + b;
}

console.log(b);

//Answer:




//34. Apply the pop method to the array below.

var arr = [ 1, 2, 3, 4 ]

//Answer:




//35. Apply the push method to the array below.

var arr = [ 1, 2, 3, 4 ]

//Answer:




//36. Apply the shift method to the array below.

var arr = [ 1, 2, 3, 4 ]

//Answer:




//37. Apply the unshift method to the array below.

var arr = [ 1, 2, 3, 4 ]

//Answer:




//38. Create an associative array that stores 3 pieces of information about 3 of your family members.

//Answer:




//39. What does ++ do?

//Answer:




//40. What does -- do?

//Answer:




//41. What will the following lines of code print out?

var num = 3;
num += 4;
console.log(num);

//Answer:




//42. What will the following lines of code print out?

var num = 8;
num *= 4;
console.log(num);

//Answer:




//43. What will the following lines of code print out?

var num = 21;
num /= 7 ;
console.log(num);

//Answer:




//44. Review the code below.

var colors = ['red', 'blue', 'green' 'yellow']
var certainColor = 'green'
var currentColor = colors[0];
var i = 0;
while (certainColor !== currentColor) {
  console.log(currentColor);
i;
  currentColor = colors[i];
}

//What is the problem with the code? How could you fix it?

//Answer:





//45. Write the code for a function that prints out the text passed into the function as an argument.

//Answer:




//46. Create a function that prints out the average of a set of numbers.

//Answer:




//47. Call your above function and write the code to make the average print out.

//Answer:




//48. Use ternary operators to shrink the following code:

    var light = 'on';

    function toggleLight() {
        if (light === 'on') {
            light === 'off';
        }  else {
        light === 'on';
        }
    }

    toggleLight();

//Answer:





//49. Create an object called “bob”. Assign the object “bob” the following properties:
  //name: "Bob Smith",
  //age: 30

  //Then print out bob’s full name by accessing the properties within the object.

//Answer:




//50. Create a method called “aging” that adds 20 years to bob’s age. Then print out bob's new age.

//Answer:





//Bonus: Suppose you’re working for twitter and you have the following arrays available.

    var username = [‘JoeQuery’, ‘CLofton’, ‘mistakevin’]
    var tweet = [‘You are my sunshine’, ‘Amarillo by morning, up from San Anton’, ‘giggidy giggidy’]
    var date = [ “07/24/2015” , “09/25/2015”, “10/25/2015” ]

//Generate an ordered list of tweets of the following form:

    <ul>
        <li>@JoeQuery - You are my sunshine - Posted on 07/24/2015</li>
        <li>@CLofton - Amarillo by morning, up from San Antone - Posted on 09/25/2015</li>
        <li>@mistakevin - giggidy giggidy - Posted on 10/25/2015</li>
    </ul>

//Answer:
