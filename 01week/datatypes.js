//problem 1
let d = new Date()
console.log(d.toLocaleString())

//problem 2
function convertNumToString(num) {
  if(!num){
    return num
  }
  return num.toString();
}
console.log(convertNumToString(undefined))
console.log(convertNumToString(5.38))


//problem 3
function convertStringToNum(str) {
  return parseFloat(str);
}
console.log(convertStringToNum('41.5'))
console.log(convertStringToNum('200') + convertStringToNum('200'))


//Write a JavaScript program that takes in different datatypes and prints out whether they are a:
function datatypeString(obj) {

  if(null === obj){
    return 'Null'
  }
  if(undefined === obj){
    return 'Undefined'
  }
  if(obj.toString() == 'NaN'){
    return 'NaN'
  }
  
  return typeof obj
}

//Boolean //
console.log(datatypeString(true))
//Null
console.log(datatypeString(null))
//Undefined
const someUndefinedValue = datatypeString(undefined)
console.log(someUndefinedValue)
//Number
const someNumber = datatypeString(45)
console.log(someNumber)
//NaN
const someNan = datatypeString(parseInt('Hello world'))
console.log(someNan)
//String
const someString = datatypeString('hello')
console.log(someString)

//problem 5
let firstNumber=10;
let secondNumber=4;
console.log(firstNumber + secondNumber);

//problem 6
let myVariable = 100;
let yourVariable = 200;
if(myVariable && yourVariable) { 
    console.log("Both are true")
    }

//problem 7
myVariable = false;
yourVariable = 200;
if(myVariable || yourVariable) { 
    console.log("Only one has to be true")
    }

//problem 8 Write a JavaScript program that runs when both things are not true.

myVariable = false;
yourVariable = false;
if(!myVariable && !yourVariable) { 
    console.log("Both are false")
    }