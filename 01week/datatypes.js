//What do you know already about JavaScript?

//Why do we write 'use strict' at the top of every JS project?
//Strict mode helps out in a couple ways: It catches some common coding bloopers, throwing exceptions. It prevents, or throws errors, when relatively “unsafe” actions are taken (such as gaining access to the global object). It disables features that are confusing or poorly thought out.The "use strict" directive switches the engine to the “modern” mode, changing the behavior of some built-in features. 

//How and why do we write comments in JS code?

//Why is JavaScript important for professional web developers?

//Write a JavaScript program to display the current day and time.
const getTime=()=>{
  const currentDate = new Date(),
      day = currentDate.getDate(),
      month = currentDate.getMonth() + 1,
      year = currentDate.getFullYear();
      hour = currentDate.getHours();
      minute = currentDate.getMinutes();
  console.log(day + "/" + month + "/" + year);
  console.log(hour +":"+ minute);
};
getTime();

//Write a JavaScript program to convert a number to a string.
const stringyNum=(num1)=>{
  const num=num1.toString();
  console.log(num);
};
stringyNum(12533);

//Write a JavaScript program to convert a string to the number.
const numbyString=()=>{
  const text = '42px';
  const integer = parseInt(text, 10)
  console.log(integer);
};
numbyString();

//Write a JavaScript program that takes in different datatypes and prints out whether they are a:
//Boolean
//Null
//Undefined
//Number
//NaN
//String
console.log(typeof "I love JS!");
console.log(typeof 19.08);
console.log(typeof NaN);
console.log(typeof true);
console.log(typeof [1, 2, 3, 4]);
console.log (typeof {name:'Mel', age:34});
console.log(typeof new Date());
console.log(typeof function () {});
console.log(typeof myCar);
console.log(typeof null);


//Write a JavaScript program that adds 2 numbers together.
addTwoNums = (num1, num2) => {
  return num1 + num2;
};
console.log(addTwoNums(34,26));

//Write a JavaScript program that runs only when 2 things are true.
const bothAreTrue = (input1, input2)=>{
  if (input1 && input2)
    return "both are true"
  };

console.log(bothAreTrue(7, 'hello'));
console.log(bothAreTrue(null, [] ));
console.log(bothAreTrue(null, false));

//Write a JavaScript program that runs when 1 of 2 things are true.
const oneIsTrue = (input1, input2)=>{
  if (input1 || input2)
    return "at least one is truthy"
  };
console.log(oneIsTrue(7, 'hello'));
console.log(oneIsTrue(null, [] ));
console.log(oneIsTrue(null, false));

//Write a JavaScript program that runs when both things are not true.
const bothAreNotTrue = (input1, input2)=>{
  if (!input1 && !input2)
    return "both are not true"
  };
console.log(bothAreNotTrue(7, 'hello'));
console.log(bothAreNotTrue(null, [] ));
console.log(bothAreNotTrue(null, false));