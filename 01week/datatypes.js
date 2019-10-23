// function declaration
function isTypeOf(data) {
  return console.log(typeof data);
}

//make a variable called name and assign it's value to be your name as a string
const name = 'Patrick';

//make a variable called userAge and assign it's value to be your age as a number
const userAge = 33;

//create a function called dividedBy, it should take in any two numbers and return the result of the first number divided by the second

//Divide 2 numbers

let number1 = 8;
let number2 = 2;

const dividedBy = (num1, num2) => {
  return num1/num2;
}

console.log('Divide 2 numbers: ', dividedBy(number1, number2));

//Print today's date and time:
let todaysDate = Date();
console.log('todays Date and Time: ', todaysDate);

//Convert a number to a string:
let num = 7;
let stringedNum = num.toString(); //'7'
console.log('number to string: ', stringedNum);
isTypeOf(stringedNum);


//Convert a string to a number:
let string = '7';
let nummedString = parseInt(string, 10); // 7
console.log('String to number: ', nummedString);
isTypeOf(nummedString);

//Add 2 numbers:
//number1 = 8, number2 = 2;
console.log('sum 8 and 2 :', number1 + number2)


//Prints Both are true:
sumTwoFour = 6;

if (sumTwoFour && nummedString) {
  console.log('&& -- Both are true');
}

//Prints One is True:
let madeUpVar = null;
let fakeVar = null;

if (sumTwoFour || madeUpVar) {
  console.log('|| -- One is true');
}

//Prints neither is true:
if (madeUpVar || fakeVar) {
  console.log('one is true');
} else {
  console.log('neither is true.');
}

//Declares dataTypes:

let booleanVar = true;
let nullVar = null;
let undefinedVar;
let numberVar = 4;
let nanVar = 'orange';
let stringVar = 'Hello Var!';


// Tests dataTypes and prints to console:
console.log('Data Types: ')
isTypeOf(booleanVar);
isTypeOf(nullVar);
isTypeOf(undefinedVar);
isTypeOf(numberVar);
isTypeOf(nanVar);
isTypeOf(stringVar);
