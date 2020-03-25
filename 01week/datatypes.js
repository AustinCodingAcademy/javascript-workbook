'use strict'

//current day and time
let now = new Date();
console.log("the current date and time")

//Write a JavaScript program to convert a number to a string
const theNumber = 5;
const theString = theNumber.toString();

console.log("the string is five")
console.log("the number is", theString)

//Write a JavaScript program to convert a string to the number.
const theOtherString = "4.5";
const theOtherNumber = parseInt(theOtherString, 10)
console.log("the otherString type", typeof theOtherString)
console.log("the otherNumber type", typeof theOtherNumber)

//Write a JavaScript program that takes in different datatypes and prints out whether they are a:
//Boolean
let drink = true
console.log(drink === 5)
console.log("the datatype is", typeof drink)

//Null
let food = null
console.log(food)
console.log("the datatype is", typeof food)

//Undefined
let pizza 
console.log(pizza)
console.log("the datatype is", typeof pizza)
//Number
let shoe = 5.89
console.log("the datatype is", typeof shoe)

//NaN
let pig = NaN
console.log("the datatype is", typeof pig)

//String
let cat = "I am a cat"
console.log("the datatype is", typeof cat)

//Write a JavaScript program that adds 2 numbers together

let hot = 5
let cold = 12
let warm = hot + cold
console.log("hot and cold =", warm)

//Write a JavaScript program that runs only when 2 things are true
console.log(hot === 5 && cold ===12)

//Write a JavaScript program that runs when 1 of 2 things are true
console.log(hot === 8 || cold ===12)

//Write a JavaScript program that runs when both things are not true
console.log(!(hot === 8) && !(cold ===15))

