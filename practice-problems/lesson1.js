//1. What is a data type that can have only the values true or false? Provide an example.

//Answer: The Boolean datatype can have only true and false values.
var x=true;




//2. What is a null value? Provide one example.

//Answer: A variable having the value 'null', means that the coder explicitly defined the variable to have a null value.
var a=null;

//3. List and describe 3 more data types used in JS.

//Answer: integer -- a number without a decimal --> var b=2;
// float or double -- a number with a decimal --> var c=2.23;
//string -- stores an array of characters --> var st='string';


//4. Why do we use comments in JS?

//Answer: To clearly detail/define the code we are about to write and make sure the intent of the code is defined.


//5. Why do we use 'strict mode'?

//Answer: To disable some of the features in java which might hinder with the execution.


//6. Write the code to log the output "Hello World".

//Answer: console.log("Hello World");


//7. What is the difference between the "and" and the "or" operators? Explain why you would use each of them.

//Answer: I would use the 'and' operator when i want a particular function to satisfy multiple conditions then execute its function. The 'or' operators would be used when i want one out of multiple conditions to be true.


//8. Explain truthiness and falsiness in your own words. Provide an example for each.

//Answer: truthiness when something appears to be true and doesnt necessarily give a Boolean expression. falsiness is the samething but with false.



//The following is an example of what the next few questions will look like:

//Will the follow lines of code print out true or false?
//console.log(true && true);

//Answer: true


//9. console.log(true && false);

//Answer: false




//10. console.log(false && true);

//Answer:false




//11. console.log(true && true && false);

//Answer:false




//12. console.log(true || false);

//Answer:true




//13. console.log(false || true);

//Answer:true




//14. console.log(true || true || false);

//Answer:true




//15. console.log(!true);

//Answer:false




//16. console.log(!undefined);

//Answer:false




//17. console.log(!!"Hello");

//Answer:true




//18. console.log(!!null);

//Answer:true




//19. var x = 7;
//    var y = 5;

//    console.log(x !== y);

//Answer:true




//20. What’s the difference between == and ===?

//Answer: === -> compares value and type ; == -> compares value




//21. What’s the difference between != and !==?

//Answer:




//22. What does (7 - 4 && 6 + 3) || (7 < 5 || 8 > 4) evaluate to? Explain how you solved your answer.

//Answer:true
// It's complicated. 7-4 =3 which is compared to 9 which gives the value of false. 7<5 is false and 8>4 is true, since its compared with the || operator it gives a value of true then the final expression is --> false||true which gives true.
