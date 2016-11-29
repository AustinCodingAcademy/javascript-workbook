//1. What is a data type that can have only the values true or false? Provide an example.

//Answer: boolean.
//Ex: var isTure= true;




//2. What is a null value? Provide one example.

//Answer: null is the absence of value in an object.
//Ex: var noValue = null;




//3. List and describe 3 more data types used in JS.

//Answer: string - a sequence of character;
//number - a data point for numerical values;
//array - A table or group of similar values;


//4. Why do we use comments in JS?

//Answer: So other people we work with can see what we are doing, it's a way to explain our work or to make notes to ourselfves;


//5. Why do we use 'strict mode'?

//Answer: To increase performance and relaability, lets us see more of our errors;


//6. Write the code to log the output "Hello World".

//Answer: console.log("Hello World");


//7. What is the difference between the "and" and the "or" operators? Explain why you would use each of them.

//Answer: and both expressions must be true, or either expression can be true. And can add more criteria, or cna make it more yes or no.


//8. Explain truthiness and falsiness in your own words. Provide an example for each.

//Answer: truthy means closer to true or anything other than false, falsy mean closer to false or anything other than true. While null or 0 values are truthy.



//The following is an example of what the next few questions will look like:

//Will the follow lines of code print out true or false?
//console.log(true && true);

//Answer: true


//9. console.log(true && false);

//Answer:
false
undefined


//10. console.log(false && true);

//Answer:
false



//11. console.log(true && true && false);

//Answer: false




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

//Answer:
== is a comparision
=== has to be same data type and information


//21. What’s the difference between != and !==?

//Answer:
!= is a comparision
!== looks for exact values


//22. What does (7 - 4 && 6 + 3) || (7 < 5 || 8 > 4) evaluate to? Explain how you solved your answer.

//Answer:
(3 && 9) || (false || true)
(true && true)  || true
true || true
true
