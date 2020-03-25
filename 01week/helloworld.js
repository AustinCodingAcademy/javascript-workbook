'use strict'

// Write a JavaScript program to display the current day and time.
let now = new Date()
console.log('the current date is', now)


// Write a JavaScript program to convert a number to a string.
const theNumber = 5
const theString = theNumber.toString()

console.log('The string is', theString)
console.log('the number is', theNumber)


// Write a JavaScript program to convert a string to the number.
const theOtherString = '5'
const theOtherNumber = parseInt(theOtherString, 10)
  // is there a reason to use parseInt() over Number() ?
  const theOtherNumber1 = Number(theOtherString)

console.log('The otherString type is', (typeof theOtherString))
console.log('The otherNumber type is', (typeof theOtherNumber))


// Write a JavaScript program that takes in different datatypes and prints out whether they are a Boolean, Null, Undefined, Number, NaN, String
const data1 = true
const data2 = null
const data3 = 'Hello'
const data4 = NaN
let data5

console.log(typeof data1)
console.log(typeof data2)
console.log(typeof data3)
console.log(typeof data4)
console.log(typeof data5)

// 