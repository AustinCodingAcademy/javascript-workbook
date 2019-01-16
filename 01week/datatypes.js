// 1.Write a JavaScript program to display the current day and time.
let date = new Date();
console.log(date);
"/n"
// 2. Write a JavaScript program to convert a number to a string.
let number2 = 15;
number2 = "This is now a string"
console.log(number2);

//3. Write a JavaScript program to convert a string to the number.
let string3 = 'String';
string3=  4;
console.log(string3);

//4. Write a JavaScript program that takes in different datatypes and prints out whether they are a:
//Boolean
console.log(typeof true);
//Null
console.log(typeof null);
//Undefined
console.log(typeof x);
//Number
console.log(typeof 4);
//NaN
console.log(typeof NaN);
//String
console.log(typeof 'Hello World!');

//5.Write a JavaScript program that adds 2 numbers together.
let sum = (2+2);
console.log(sum);


//6.Write a JavaScript program that runs only when 2 things are true

let firstStatement = true;
let secondStatement = true;
if (firstStatement && secondStatement){
  console.log('Both are true');
}

//7.Write a JavaScript program that runs when 1 of 2 things are true.

if (firstStatement || secondStatement){
  console.log("At least one is true");
}

//8.Write a JavaScript program that runs when both things are not true
if (!firstStatement && !secondStatement ){
  console.log('Both are false')
}