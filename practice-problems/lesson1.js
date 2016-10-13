//1. What is a data type that can have only the values true or false? Provide an example.

//Answer: boolean.
//Example: var isTrue = true;




//2. What is a null value? Provide one example.

//Answer: Null value represents the intentional absence of object value.
//Example: var noValue = null;




//3. List and describe 3 more data types used in JS.

//Answer: string - represents a sequence of characters; number - represents numeric values; array - represents a group of similar values


//4. Why do we use comments in JS?

//Answer: to make our code more readable. We might have to maintain the code in the future or hand off the project to someone else.


//5. Why do we use 'strict mode'?

//Answer: It changes some silent errors to throw errors so we can be more aware of what's going on with our code, can increase performance of identical code that's not in strict mode, and prohibits some syntax that is likely to be defined in future versions of javascript (not sure exactly what that last part means yet, but that's what MDN says).


//6. Write the code to log the output "Hello World".

//Answer: console.log("Hello World");


//7. What is the difference between the "and" and the "or" operators? Explain why you would use each of them.

//Answer: "and" is true only if the expressions on both sides evaluate true. "or" is true if either expression is true. "and" can be used to achieve greater specificity when making evaluations, whereas "or" can be used to include a broader range of cases.


//8. Explain truthiness and falsiness in your own words. Provide an example for each.

//Answer: being truthy means having a value of 'true' or any other meaningful value other than 'false.' true 1 -1 'yo' are all truthy values.
//        being falsy means having a value of 'false' or not having a meaningful value. false 0 null undefined NaN are all falsy values.
//        'meaningful' is not the best word, since all of the falsy values could be meaningful, especially 0, but I'm trying to avoid 'emotionally positive' because I didn't come up with it and the prompt asks for my own words.



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

//Answer: == tests whether the operands are equal while === tests whether operands are equal and of same data type.




//21. What’s the difference between != and !==?

//Answer: first means not equal to and second means not (equal to and same data type as)




//22. What does (7 - 4 && 6 + 3) || (7 < 5 || 8 > 4) evaluate to? Explain how you solved your answer.

//Answer: true. (7 - 4 && 6 + 3) evaluates true because it's comparing two numbers. Numbers (other than 0) are truthy. Since one operand of the main || operator is true I don't have to evaluate the second operand.
