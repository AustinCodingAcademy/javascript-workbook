
// Write a JavaScript program to display the current day and time.
var today = new Date()
console.log(today.getMonth() + "/" + today.getDate() + "/" + today.getFullYear())
// Write a JavaScript program to convert a number to a string.
var number = 8
console.log(number.toString())
// Write a JavaScript program to convert a string to the number.
var numberString = "3887"
console.log(parseInt(numberString))
// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
// Boolean
var y = 2
if (y = true) {
  console.log('true')
}
// Null
//var x = document.querySelector('.ol')
//console.log(x) value will be null because it doesnt exist, or...
var x = null
console.log(x)

// Undefined
var a 
console.log(a)
// Number
var b = 6
if (b === 6) {
  console.log("number" + 6)
}


// NaN
// var c = '7'
// if (c !== 7) {
//   console.log("NaN")
// }
var firstName = 'amber'
var lastName = 'jones'
var add = parseInt(firstName) + parseInt(lastName)
console.log(add)

// String
var school = "Austin Coding 'Academy'"
console.log(school)
// Write a JavaScript program that adds 2 numbers together.
var one = 1
var two = 2
console.log(one + two)
// Write a JavaScript program that runs only when 2 things are true.
if ((one = true) && (two = true)) {
  console.log("&& and")
}
// Write a JavaScript program that runs when 1 of 2 things are true.
if ((one = true) || (one === 3)) {
  console.log("|| or")
}
// Write a JavaScript program that runs when both things are not true.
if (!(one = false) && !(two = false)) {
  console.log("!= bang")
}