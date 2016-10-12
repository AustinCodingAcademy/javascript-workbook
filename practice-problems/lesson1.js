//1. What is a data type that can have only the values true or false? Provide an example.

//Answer:
boolean
10>9 returns true



//2. What is a null value? Provide one example.

//Answer:
no value
it is like a place holder
x = null

//3. List and describe 3 more data types used in JS.

//Answer:
string - is a squence of charactgers, like "hello"
number - is a number like 5
undefined - a variable has been created but has been asigned no value


//4. Why do we use comments in JS?

//Answer:
comments can be used to explain code for other developers to understand, it can also be used to block off areas of code to prevent it from executing, for testing.

//5. Why do we use 'strict mode'?

//Answer:
strict mode changes bad code into real errors, and is more secure

//6. Write the code to log the output "Hello World".

//Answer:
console.log("Hello World")

//7. What is the difference between the "and" and the "or" operators? Explain why you would use each of them.

//Answer:
and, or are used to compare boolean values
and(&&) will first check the left value to see if it is true, then test the right value to see if it is true,  if either are false, it will return false.
or (||) will test to see if either values in the comparison are true.  If either
value is true, it will reason both together as true.

//8. Explain truthiness and falsiness in your own words. Provide an example for each.

//Answer:
truthiness values are values that seem true,  or emotionally positive
falsiness values are values that seem false, or emotionally negative


//The following is an example of what the next few questions will look like:

//Will the follow lines of code print out true or false?
//console.log(true && true);

//Answer:
true


//9. console.log(true && false);

//Answer:
false


//10. console.log(false && true);

//Answer:
false



//11. console.log(true && true && false);

//Answer:
false



//12. console.log(true || false);

//Answer:
true



//13. console.log(false || true);

//Answer:
true



//14. console.log(true || true || false);

//Answer:
true



//15. console.log(!true);

//Answer:
false



//16. console.log(!undefined);

//Answer:
true



//17. console.log(!!"Hello");

//Answer:
true


//18. console.log(!!null);

//Answer:
false



//19. var x = 7;
//    var y = 5;

//    console.log(x !== y);

//Answer:
true



//20. What’s the difference between == and ===?

//Answer:
== returns true if both values are equal
=== returns true if both values are equal and of the same type


//21. What’s the difference between != and !==?

//Answer:
!= not equal values
!== not equal value or type



//22. What does (7 - 4 && 6 + 3) || (7 < 5 || 8 > 4) evaluate to? Explain how you solved your answer.

//Answer:
true because...

(3 && 9) or (false || true)
(true) or (true)
true
