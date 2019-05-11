//Write a JavaScript program to display the current day and time.
console.log(Date());

//Write a JavaScript program to convert a number to a string.

const numberToString = (num) => {
  return num.toString()
}
console.log(numberToString(2));

//Write a JavaScript program to convert a string to the number.

const stringToNumber = (str) => {
  return parseInt(str, 10 );
}
console.log(stringToNumber('42'));

/*Write a JavaScript program that takes in different datatypes and prints out whether they are a: 
Boolean*/

function isVar(bln){
  return typeof bln;
}
console.log(isVar(42));


//Write a JavaScript program that adds 2 numbers together.

function addNums(num1, num2){
  return num1 + num2;
}
console.log(addNums(5,2))

//Write a JavaScript program that runs only when 2 things are true.

function twoTrue(x,y){
  if(x==1 && y==2){
  return addNums(4,5);
}}

console.log(twoTrue(1,2));

//Write a JavaScript program that runs when 1 of 2 things are true

function oneTrue(x,y){
  if(x==1 || y==2){
    return addNums(3,3);
  }
}
console.log(oneTrue(0,2));

//Write a JavaScript program that runs when both things are not true.
function noneTrue(x,y){
  if(!(x==1) && !(y==2)){
  return addNums(4,4);
  }
}
console.log(noneTrue(12,1));

