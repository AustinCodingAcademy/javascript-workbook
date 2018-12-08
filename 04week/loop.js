const cars = ["porsche", "ferrari", "lamborghini", "lotus"];

//Use a for loop to console.log each item in the array carsInReverse.
//for...in loop

for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

//Create an object (an array with keys and values) called persons with the following data:

var persons = {
  firstName: "Jane",
  lastName: "Doe",
  birthDate: "Jan 5, 1925",
  gender: "female"
};

//Use a for...in loop to console.log each key.
for (const key in persons) {
  console.log(persons[key]);
}

//Then use a for...in loop and if state to console.log the value associated with the key birthDate.
for (const i in persons) {
  if (i === "birthDate") {
    console.log(persons[i]);
  }
}

//while loop
//Use a while loop to console.log the numbers 1 to 1000. Using while loop
let num = 1;
while (num < 1000) {
  num += 1;
  console.log(num);
}

//do...while loop
let nums = 1;
do {
  nums += 1;
  console.log(nums);
} while (nums < 1000);

//When is a for loop better than a while loop?
//How is the readability of the code affected?
//What is the difference between a for loop and a for...in loop?
//What is the difference between a while loop and a do...while loop?
