'use strict'

// Write a JavaScript program to display the current day and time.
let now = new Date()
console.log(`the current date is ${now.toLocaleString()}`)


// Write a JavaScript program to convert a number to a string.
const theNumber = 5
const theString = theNumber.toString()

console.log(`${theString} is a ${typeof theString}`)
console.log(`${theNumber} is a ${typeof theNumber}`)


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


// Write a JavaScript program that adds 2 numbers together.
const num1 = 5
const num2 = 7

let addingThese = num1 + num2
console.log(addingThese)

  // Adding in a function
  const addingTheseUp = (x, y) => {
    return x + y
  }
  console.log(addingTheseUp(13, 8))


// Write a JavaScript program that runs only when 2 things are true.
const atx = 'city'
const dfw = 'city'
const tx = 'state'

const cities = (x, y) => {
  if (x === 'city' && y === 'city') 
    return `Both are cities`
  else 
    return `One or both are not cities`
}
console.log(cities(atx, dfw))


// Write a JavaScript program that runs when 1 of 2 things are true.
const shower = true
const bathtub = false

const apartment = (x, y) => {
  if (x === true || y === true)
    return `This apartment has a bathroom`
}

console.log(apartment(shower, bathtub))


// Write a JavaScript program that runs when both things are not true.
const radio = false
const podcast = false

const tv = (x, y) => {
  if (x !== true && y !== true)
    return `These are not visual platforms`
}

console.log(tv(radio, podcast))


// EXTRA: playing with arrays & arrow functions to figure them out. trying to create another true scenario by determining if person is legal age to drink. though I can't figure out how to just console the value of the 'name' key
const personsAge = [{
  name: 'Dylan',
  age: 18
}, {
  name: 'Ryan',
  age: 21
}, {
  name: 'Larry',
  age: 24
}, {
  name: 'Jack',
  age: 27
}]

const drinkingAge = personsAge.filter((legal) => legal.age >= 21)

console.log(drinkingAge)