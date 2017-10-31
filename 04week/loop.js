'use strick'
const cars = ['ford', 'audi', 'bmw', 'volvo', 'tata', 'chevrolet', 'tesla'];
for (i = 0; i <= cars.length; i++) {
console.log(cars[i]);
}

var person = {
  firstName: "Jane",
  lastName: "Doe",
  birthDate: "Jan 5, 1925",
  gender: "female"
};


for (const keys in person){
  console.log(keys);
}


for (const keys in person){
  if (keys === 'birthDate'){
  console.log(person[keys]);
}
}


let numArray = [];
for ( i = 1; i <= 1000; i++) {
  numArray.push(i);
}
  console.log(numArray);


let x = 0;
  do {
    x ++;
    console.log(x);
  } while (x <= 999);


// The for loop would be used if the number of iterations is known. The while loop would be better suited if the loop has an uncertain number of iterations or dependant on a particular condition.

//Overall the readabilty of the For loop is better.

// for loops are meant to iterate while incrementing/decrementing. For..in loops are meant to enumerate through object properties.

//A while loop in javascript loops through a block of code while a condition is true, a do/while loops through a block of code once, and then repeats the loop while a specified condition is true.