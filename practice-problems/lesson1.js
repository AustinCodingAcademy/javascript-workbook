//1. What is a data type that can have only the values true or false? Provide an example.

// A boolean.  
var a = 4;
var b = 3;

if (a > b) {
  console.log("true");
}

//2. What is a null value? Provide one example.

//An assignment value put away to be used for later

var variableForLater = null;
console.log(variableForLater);

variableForLater = "Can I meet you later?";
console.log(variableForLater);

//3. List and describe 3 more data types used in JS.

// A string - anything put between quotes

var thisIsAString = "Greg";
console.log(thisIsAString);

// undefined - a variable declared but to be used for later

var thisIsUndefined;
console.log(thisIsUndefined);

// number - anything with a numeric or integer value

var thisIsANumber = 4;
console.log(thisIsANumber);

//4. Why do we use comments in JS?

// To make our code more readable and understandable and for maintainability for other developers who may come after us.  It gives them a clear picture of what is going on 


//5. Why do we use "strict mode"?

// First, strict mode eliminates some JavaScript silent errors by changing them to throw errors. Second, strict mode fixes mistakes that make it difficult for JavaScript engines to perform optimizations: strict mode code can sometimes be made to run faster than identical code that"s not strict mode. Third, strict mode prohibits some syntax likely to be defined in future versions of ECMAScript.


//6. Write the code to log the output "Hello World".

var helloWorld = "Hello World";
console.log(helloWorld);


//7. What is the difference between the "and" and the "or" operators? Explain why you would use each of them.

// The difference comes within conditionals.  When comparing two values the AND operator will need both conditions to be true/false in order to satisfy its conditions.  The OR operator will satisfy its conditions when one of the two conditions are met.  

//Examples

var d = 4;
var e = 2;
var f = 3;

if ((d && e) > f) {
  console.log("TRUE");
} else {
  console.log("FALSE");
}

if ((d || e) > f) {
  console.log("true");
} else {
  console.log("false");
}

//8. Explain truthiness and falsiness in your own words. Provide an example for each.

//Answer: a truthy or falsey value is a value that translates to true/false when evaluated in a Boolean context.



//The following is an example of what the next few questions will look like:

//Will the follow lines of code print out true or false?
//console.log(true && true);

//Answer: true


//9. 

console.log("9:", true && false);

//Answer: false



//10. 

console.log("10:", false && true);

//Answer: false



//11. 

console.log("11:", true && true && false);

//Answer: false



//12. 

console.log("12:", true || false);

//Answer: true



//13. 

console.log("13:", false || true);

//Answer: true


//14. 

console.log("14:", true || true || false);

//Answer: true


//15. 

console.log("15:", !true);

//Answer: false



//16. 

console.log("16:", !false);

//Answer: true


//17. 

console.log("17:", !!"Hello");

//Answer: true

//18. 

console.log("18:", !!null);

//Answer: false


//19. 
var x = 7;
var y = 5;

console.log("19:", x !== y);

//Answer: true


//20. What’s the difference between == and ===?

//Answer:  This is a strict equals operator.  It pertains to forcing a strict equality between two values.  == compares the value whereas === compares value and type

//examples

var nine = "9";
var numNine = 9;

// Removed to hide errors from the codacy about the non-strict equals
// console.log(nine === numNine);
// console.log(nine == numNine);




//21. What’s the difference between != and !==?

// This is using the !(not operator).  Again works with strictally equaling a value to what you are comparing. Checking the value and the value and type. 

var ten = "10";
var numTen = 10;

// Removed to hide errors from the codacy about the non-strict !==

// console.log(ten !== numTen);
// console.log(ten != numTen);


//22. What does (7 - 4 && 6 + 3) || (7 < 5 || 8 > 4) evaluate to? Explain how you solved your answer.

//Answer:  The answer is 9 .  With the order of precendence the items within the parens are evaluated first.  Then the operations move outward.  so 7 - 4 is equal to 3 and 6 + 3 is equal to nine for a value.  In the other block.  Is 7 < 5 = false or 8 > 4 true so that block will evaluate to true since its using the || operator.  The operation then compares whether 9 or true.  In this instance it will return 9. 

console.log((7 - 4 && 6 + 3) || (7 < 5 || 8 > 4));
