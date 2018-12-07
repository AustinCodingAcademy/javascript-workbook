const cars = ["porsche", "ferrari", "lamborghini", "lotus"];


//Complete each of the following exercises.

//for loop
//Use a for loop to console.log each item in the array carsInReverse.
for (let x = 0; x < cars.length; x++) {
    const text = cars[x];
    console.log(x);
}
//for...in loop
//Create an object (an array with keys and values) called persons with the following data:

const person = {
firstName: "Jane",
lastName: "Doe",
birthDate: "Jan 5, 1925",
gender: "female",
}

//Use a for...in loop to console.log each key.
for (const i in person) {
    console.log([i]);
  }
  

//Then use a for...in loop and if state to console.log the value associated with the key birthDate.
for (const i in person) {
    if (i === "birthDate") { 
      console.log(person[i]);
    }
  }
//while loop
//Use a for loop to console.log the numbers 1 to 1000.
let a = 0
while (a < 1000) {
    a += 1;
    console.log(a);
    
}
    

//do...while loop

//Use a do...while loop to console.log the numbers from 1 to 1000.

//When is a for loop better than a while loop?

//How is the readability of the code affected?

//What is the difference between a for loop and a for...in loop?

//What is the difference between a while loop and a do...while loop?