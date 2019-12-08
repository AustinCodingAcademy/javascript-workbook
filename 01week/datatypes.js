// Problem #1

let today = new Date();
console.log(today);

// Problem #2

let num = 15;
let n = num.toString();
console.log(typeof n);

// Problem #3

let text = '42px';
let integer = parseInt(text, 10);
console.log(integer)

// Problem #4
//Boolean
let nameBe = true;
console.log(typeof nameBe);
//Null
let age = null;
console.log(typeof age)
//Undefined
let x = 123;
x = undefined;
console.log (typeof x);
//Number
let n = 123;
n = 12.345;
console.log(typeof n);
//String
let str = "Hello";
console.log(typeof str);

//Problem #5
let num1 = 15;
let num2 = 5;
console.log(num1 + num2);

//Problem #6
let object1 = 11;
let object2 = 19;
if (object1===11 && object2===19) {
  console.log(object1 + object2)
}

//Problem #7
if (1 > 10 || 1 < 20) {
  console.log("One is Truthy!")
}

//Problem #8
if (1 > 10 && 1 > 20) {
  console.log("One is Truthy!")
} else {
  console.log("Both are Falsey!")
}



