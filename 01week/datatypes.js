// 1. Write a JavaScript program to display the current day and time//

let currentDate = new Date();
let day = currentDate.getDate();
let month = currentDate.getMonth();
let year = currentDate.getFullYear();

console.log(day + "/" + month + "/" + year);

// 2. Write a JavaScript program to convert a number to a string//

let num = 15;
let n = num.toString();

console.log(n);

// 3. Write a JavaScript program to convert a string to the number//

let Sarina = Number("28");
let Colosimo = Sarina;

console.log(Colosimo);


// 4/1 Write a JavaScript program that takes in different datatypes and prints out whether they are a Boolean//

let myBool = false;

function isTypeOf(data) {
return console.log(typeof data);
}

isTypeOf(myBool);


// 4/2 Write a JavaScript program that takes in different datatypes and prints out whether they are a Null//

let Sunday = null;

console.log(null);


// 4/3 Write a JavaScript program that takes in different datatypes and prints out whether they are a Undefined//


let a;
console.log(a);

// 4/4 Write a JavaScript program that takes in different datatypes and prints out whether they are a Number//

let numberTypes = (4, 8);
let myNameIs = "Sarina";
let answerIs = true;

console.log(typeof numberTypes);
console.log(typeof myNameIs);
console.log(typeof answerIs);



// 4/5 Write a JavaScript program that takes in different datatypes and prints out whether they are a NaN//


function myNumber(x) {
if (isNaN(x))
return x * 1000;
}
console.log(myNumber('100F'));


// 4/6 Write a JavaScript program that takes in different datatypes and prints out whether they are a string//

let soccer = "game";
let football = 8;

console.log(typeof "game");
console.log(typeof 8);



// 5. Write a JavaScript program that adds 2 numbers together//

let firstNumber = 9;
let secondNumber = 3;

console.log(firstNumber + secondNumber);


// 6. Write a JavaScript program that runs only when 2 things are true//

let Robby = true;
let Monica = true;

console.log(Robby == Monica);


// 7. Write a JavaScript program that runs when 1 of 2 things are true.//

let hour = 10;

if (hour >= 6 && hour < 12) {
console.log('Good Morning!');
}
else if (hour > 12 && hour < 18)
console.log('Good afternoon!');


// 8. Write a JavaScript program that runs when both things are not true. //

let e=4;
let d=8;
if (e=d) {
 console.log("This is true!");
} else if (e>d) {
 console.log("This isn't true!");
}

