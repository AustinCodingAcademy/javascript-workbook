let d = new Date();
console.log(d);

let num = 15;
let n = num.toString();
console.log(typeof n);

let text = '42px';
let integer = parseInt(text);
console.log(integer);

let whatDataType = true;
console.log(typeof whatDataType)

let num1 = 10;
let num2 = 32;
console.log(num1 + num2);

if (11===11 && 19===19) {
  console.log("Both are truthy!")
};

if (1 > 10 || 1 < 20) {
  console.log("One is truthy!")
};

let test5 = 5;
let test6 = 5;
if (test5===10 && test6===20) {
  console.log("Failure!")
} else {
  console.log("Both are falsey!")
};
