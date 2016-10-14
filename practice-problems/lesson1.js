//1. What is a data type that can have only the values true or false? Provide an example.

//Answer: Boolean - var booleanEx = false;


//2. What is a null value? Provide one example.

//Answer: A value that isn't meaningful, like a placeholder


//3. List and describe 3 more data types used in JS.

//Answer: String (defined in quotes like 'hello' or '5'), Number (500 or -1.434), Undefined (Not defined, even with a null value)


//4. Why do we use comments in JS?

//Answer: To explain code blocks making it easier to make changes or debug in the future.


//5. Why do we use 'strict mode'?

//Answer: It's a way to restrict some JS powers that were basically unintended in the first place - recommended for pros


//6. Write the code to log the output "Hello World".

//Answer: console.log('Hello World');


//7. What is the difference between the "and" and the "or" operators? Explain why you would use each of them.

//Answer: AND means that both conditions need to be true in order for the function to return true. OR means that only one of the conditions needs to be true.


//8. Explain truthiness and falsiness in your own words. Provide an example for each.

//Answer: Some data types have an intrinsically true or false nature. I think of it in terms of substance. If it has substance it exists and is true ('hello', 500, -3.14, true). If it doesn't have substance it doesn't exist and is more false (false, NaN, null, undefined).



//The following is an example of what the next few questions will look like:

//Will the follow lines of code print out true or false?
//console.log(true && true);

//Answer: true


//9. console.log(true && false);

//Answer: false




//10. console.log(false && true);

//Answer: false




//11. console.log(true && true && false);

//Answer: false




//12. console.log(true || false);

//Answer: true




//13. console.log(false || true);

//Answer: true




//14. console.log(true || true || false);

//Answer: true




//15. console.log(!true);

//Answer: false




//16. console.log(!undefined);

//Answer: true




//17. console.log(!!"Hello");

//Answer: true




//18. console.log(!!null);

//Answer: false




//19. var x = 7;
//    var y = 5;

//    console.log(x !== y);

//Answer: true




//20. What’s the difference between == and ===?

//Answer: == means the value is the same ('5' the string and 5 the number return true)
//        === means the value and the type is the same (above, both would both need to be numbers)




//21. What’s the difference between != and !==?

//Answer: != means not the same value and !== means not the same value and type
//          (5 != '5') returns false    (5!== '5') returns true



//22. What does (7 - 4 && 6 + 3) || (7 < 5 || 8 > 4) evaluate to? Explain how you solved your answer.

//Answer:  True - when this expression is run the output is 9, which is inherently truthy since it has substance. Switching the two values in the first comparison would result in -3 since that expression is evaluated last - this would still be truthy.
