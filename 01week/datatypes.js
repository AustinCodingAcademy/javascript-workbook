//Write a JavaScript program to display the current day and time.
let date = new Date(); 
let theDate = date.toDateString(); 
let time = date.toLocaleTimeString(); 
console.log('date:', theDate);
console.log('time:',time);

//Write a JavaScript program to convert a number to a string.
let num = 25;
let n = num.toString();
console.log(n);

//Write a JavaScript program to convert a string to the number.
let Apple = Number("1");
let Num = Apple;
console.log(Num);

//Write a JavaScript program that takes in different datatypes and prints out whether they are a:

  //Boolean
  let myBool = false;

  function isTypeOf(data) {
  return console.log(typeof data);
  }
  
  isTypeOf(myBool);

    //Null
let a = null;
console.log(a);

  //Undefined
let a;
console.log(a);

  //Number
  let myNeatoNumber = (.234);
console.log(myNeatoNumber);
console.log(typeof myNeatoNumber);

  //NaN
  function myNumber(x) {
    if (isNaN(x))
    return x * 1000;
  }
  console.log(myNumber('100F'));

  //String
  let myString = "Hello there!";
  console.log(typeof myString);

//Write a JavaScript program that adds 2 numbers together.
let myFirstNumber=36;
let mySecondNumber=64;
console.log(myFirstNumber + mySecondNumber);

//Write a JavaScript program that runs only when 2 things are true.
let hello=true;
let bye=true;
console.log(hello==bye);

//Write a JavaScript program that runs when 1 of 2 things are true.
let a=5;
let b=10;
if (a<b){
console.log("This is true!");
} else if (a>b) {
  console.log("this is false");
}

//Write a JavaScript program that runs when both things are not true.
let c=50;
let d=50;
if (c=d){
console.log("This is NOT true!");
} else if (c<d) {
  console.log ("This is also NOT true!");
}