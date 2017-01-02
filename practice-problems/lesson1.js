//1. What is a data type that can have only the values true or false? Provide an example.

//Answer:Booleans. console.log(4 < 14);




//2. What is a null value? Provide one example.

//Answer: an assignment value. var inmyMind = null;




//3. List and describe 3 more data types used in JS.

//Answer: Undefined, Number & String


//4. Why do we use comments in JS?

//Answer: used for commentary or notes for yourself and fellow developers


//5. Why do we use 'strict mode'?

//Answer: It voluntairly restricts some of JavaScripts powers that are used by accident when not needed. It saves time, frustration, and possible security concerns.


//6. Write the code to log the output "Hello World".

//Answer: console.log("Hello World");


//7. What is the difference between the "and" and the "or" operators? Explain why you would use each of them.

//Answer:AND (&&) will test whether the value on the left is true, and if so, test whether the item on the right is true. If both are true, then it will return true, if either one is false, it will return false. OR (||) will test whether each item on either side is true and if at least one side is true, it will reason both together as true.




//8. Explain truthiness and falsiness in your own words. Provide an example for each.

//Answer: an 'emotionally positive' value such as 'true' 'hello' '1' '-4' 'false' is considered truthy. Falsey is a value not assigned or 'emotionally negative' such as 'false' '0' 'null' 'undefined' 'NaN'. 0 is the only number considered falsey.



//The following is an example of what the next few questions will look like:

//Will the follow lines of code print out true or false?
//console.log(true && true);

//Answer: true


//9. console.log(true && false);

//Answer: False




//10. console.log(false && true);

//Answer: False




//11. console.log(true && true && false);

//Answer: False




//12. console.log(true || false);

//Answer: True




//13. console.log(false || true);

//Answer: True




//14. console.log(true || true || false);

//Answer: True




//15. console.log(!true);

//Answer: False




//16. console.log(!undefined);

//Answer: True




//17. console.log(!!"Hello");

//Answer: True




//18. console.log(!!null);

//Answer: False




//19. var x = 7;
//    var y = 5;

//    console.log(x !== y);

//Answer: True




//20. What’s the difference between == and ===?

//Answer: == attempts to convert the values to the same type before testing. === does not do this, it requires objects to be the same type to be equal.




//21. What’s the difference between != and !==?

//Answer: != is not equal, !== not equal value or equal type.




//22. What does (7 - 4 && 6 + 3) || (7 < 5 || 8 > 4) evaluate to? Explain how you solved your answer.

//Answer: True (3 && 9) || (false || true)
// (9) || true
// True is the answer for this problem
