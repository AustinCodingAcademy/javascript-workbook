//1. What is a data type that can have only the values true or false? Provide an example.

//Answer: boolean is only ever true or false.
//ex: var slaying = true;




//2. What is a null value? Provide one example.

//Answer: a null value is used when you want a variable to exsist but dont want to give it a meaningful value.
//ex: var todoItem = null;




//3. List and describe 3 more data types used in JS.

//Answer: 1) Undefined means that a variable is declared but not assigned anything
// 2) Numbers are either actual numbers or symbolic values.
// 3) Strings are anything between single ('') or double ("") quotes.


//4. Why do we use comments in JS?

//Answer: comments are used for notes or commentary for a developer to read.


//5. Why do we use 'strict mode'?

//Answer: strict mode voluntarily restricts some of JavaScripts powers that were pretty much always used by accident.


//6. Write the code to log the output "Hello World".

//Answer: console.log("Hello World")


//7. What is the difference between the "and" and the "or" operators? Explain why you would use each of them.

//Answer: and (&&) will test to see if both values are true and if they are then it will return true. or (||) will test to see if either values are true and if one or both are true then it will return true. they are used to return the value of multiple boolean values.


//8. Explain truthiness and falsiness in your own words. Provide an example for each.

//Answer: If it exists and is an "emotionally positive" value, it's considered "truthy": true 'hello' 'false' 1 -4. If it is not assigned a value or is an "emotionally negative" value, it's considered "falsey": false 0 null undefined NaN.



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

//Answer: flase




//16. console.log(!undefined);

//Answer: true




//17. console.log(!!"Hello");

//Answer: true




//18. console.log(!!null);

//Answer: false




//19. var x = 7;
//    var y = 5;

//    console.log(x !== y);

//Answer: undefined




//20. What’s the difference between == and ===?

//Answer: '==' is not strict which means it will try to convert one side of the expression to equal the other. '===' is strict and does not convert before doing the comparison.




//21. What’s the difference between != and !==?

//Answer: '!=' means it's equal by actually meaning it's not not equal, this will not try and convert one side of the expression to match the other. '!==' means it's not equal.




//22. What does (7 - 4 && 6 + 3) || (7 < 5 || 8 > 4) evaluate to? Explain how you solved your answer.

//Answer: true. i solved this by doing the math for each group of numbers. 7 - 4 = 3 and 6 + 3 = 9 which would make the first expression be (3 && 9) which is false. but the or (||) operator says that that doesn't mean it's false. so the next group will be 7 < 5 = false, or 8 > 4 = true. this makes the second expression true which makes the whole thing true.
