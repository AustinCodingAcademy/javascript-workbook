//1. What is a data type that can have only the values true or false? Provide an example.

//Answer: The Boolean data type is the only one that can have true or false values.
var isMarried = true;
var hasChildren = false;



//2. What is a null value? Provide one example.

//Answer: null is an assignment value. So if I want a variable to exist, but don't want to necessarily assign a meaningful value to it, I can just assign it to null. It's sort of like a placeholder.

//Example  var todoItem = null;




//3. List and describe 3 more data types used in JS.

//Answer:
1. Boolean (explained above with true and false)
2. Undefined: undefined means that a variable has been declared, but nothing, not even null, has been assigned.
3. String: Value of false if string is empty; otherwise, true


//4. Why do we use comments in JS?

//Answer: We use comments as notes for humans, and your future self. Easy reference.


//5. Why do we use 'strict mode'?

//Answer: As of ECMAScript 5 (like saying JavaScript v5), "strict mode" became available to developers. This mode voluntarily restricts some of JavaScripts powers that were pretty much always used by accident.


//6. Write the code to log the output "Hello World".

//Answer: console.log('Hello');
console.log('World');


//7. What is the difference between the "and" and the "or" operators? Explain why you would use each of them.

//Answer: The AND (&&) and OR (||) operators will return the result of multiple boolean values.

AND (&&) will test whether the value on the left is true, and if so, test whether the item on the right is true. If both are true, then it will return true, if either one is false, it will return false. You can even chain more than one operator together!

OR (||) will test whether each item on either side is true and if at least one side is true, it will reason both together as true.


//8. Explain truthiness and falsiness in your own words. Provide an example for each.

//Answer: Like most computer languages, JavaScript supports Boolean data types; values which can be set to true or false. In addition, everything in JavaScript has an inherent Boolean value, generally known as either truthy or falsy.



//The following is an example of what the next few questions will look like:

//Will the follow lines of code print out true or false?
//console.log(true && true);

//Answer: true


//9. console.log(true && false);

//Answer: false




//10. console.log(false && true);

//Answer: false




//11. console.log(true && true && false);

//Answer: true




//12. console.log(true || false);

//Answer: true




//13. console.log(false || true);

//Answer: true




//14. console.log(true || true || false);

//Answer: false




//15. console.log(!true);

//Answer: => false




//16. console.log(!undefined);

//Answer:=> true




//17. console.log(!!"Hello");

//Answer: => true




//18. console.log(!!null);

//Answer: => false




//19. var x = 7;
//    var y = 5;

//    console.log(x !== y);

//Answer: true
          undefined


//20. What’s the difference between == and ===?

//Answer: == means it's evaluating the value; === means it's evaluating both the value AND the data type; never use the double equal signs


//21. What’s the difference between != and !==?

//Answer: != means not equal
!== means not equal value or not equal type




//22. What does (7 - 4 && 6 + 3) || (7 < 5 || 8 > 4) evaluate to? Explain how you solved your answer.

//Answer: (3 && 9) || (false || true)
(true && true) || true
true || true
true
