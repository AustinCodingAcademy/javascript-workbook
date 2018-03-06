// for loop
// Use a for loop to console.log each item in the array carsInReverse.

const carsInReverse = ['honda', 'toyota', 'bmw','jeep', 'ford', 'tesla']
const cars = (array) => {
  for( let i=0 ; i<array.length ; i++){
    console.log(array[i])
  }
}
cars(carsInReverse)

// for...in loop
// Create an object (an array with keys and values) called persons with the following data:
// firstName: "Jane"
// lastName: "Doe"
// birthDate: "Jan 5, 1925"
// gender: "female"

const persons = {
	firstName: "Jane",
	lastName: "Doe",
	birthDate: "Jan 5, 1925",
	gender: "female"
}


// Use a for...in loop to console.log each key.
const keysInObject = (obj) => {
	for(let keys in obj){
		console.log(keys)
	}
}
keysInObject(persons)


// Then use a for...in loop and if state to console.log the value associated with the key birthDate.
const valueOfKey = (obj, desiredKey) => {
	Object.keys(obj).forEach((key) => {
	    if(key === desiredKey){
	    	console.log(obj[key])
	    }
	})
}
valueOfKey(persons, "birthDate")

// while loop
// Use a for loop to console.log the numbers 1 to 1000.

const numAToBWhile = (startNum, endNum) => {
	while(startNum <= endNum){
		console.log(startNum)
		startNum ++
	}
}
numAToBWhile(1, 1000)

// do...while loop
// Use a do...while loop to console.log the numbers from 1 to 1000.

const numAToBDoWhile = (beginNum, stopNum) => {
	do {
	  console.log(beginNum)
	  beginNum ++
	} while (beginNum <= stopNum);
}
numAToBDoWhile(1, 1000)

// When is a for loop better than a while loop?
//when you want to run a code a certain number of times.

// How is the readability of the code affected?
// for in loops and .forEach loops are easier to read than for loops.

// What is the difference between a for loop and a for...in loop?
// for in loops, loop through the properties of an object. for loops, loop a certain number of times.

// What is the difference between a while loop and a do...while loop?
//they are essentialy the same but a do while loop runs the code once first before considering the truthyness of the condition.
