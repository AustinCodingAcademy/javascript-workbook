'use strict';

//Use a do...while loop to console.log the numbers from 1 to 1000.

// let counter = 1;
// while(counter <= 1000) {
//     console.log(counter);
//     counter++;
// }

let counter = " ";
let  i = 0;
do {
    i = i + 1;
    counter = counter + i;
}   while (i < 1000);
console.log(counter);

//Create an object (an array with keys and values) called person with the following data:

const person = {
firstName: "Jane",
lastName: "Doe",
birthDate: "Jan 5, 1925",
gender: "female"
};

//Use a for..in loop and if statement to console.log the value associated with the key birthDate if the birth year is an odd number.

let text = "";
let x;
for (let x in person) {
    if (x === 'birthdate') {
       console.log(person[x]) 
    }
}

//Create an arrayOfPersons that contains mulitiple objects.

const arrayOfPersons = [{firstName: "Jane",
lastName: "Doe",
birthDate: "Jan 5, 1925",
gender: "female"}, 
{firstName: "John",
lastName: "Smith",
birthDate: "Jan 1, 1955",
gender: "male"}
];

//Use .map() to map over the arrayOfPersons and console.log() their information.

const arrayOfPeople = arrayOfPersons.map(newList => { 
    return newList;
});
console.log(arrayOfPersons);

//Use .filter() to filter the persons array and console.log only males in the array.

const guys =  arrayOfPersons.filter(John => John.firstName === 'John'); 
    console.log(guys);

//Use .filter() to filter the persons array and console.log only people that were born before Jan 1, 1990.

const oldPeople = arrayOfPersons.filter(birthDate => (birthDate.start < 1999 && birthDate.end > 1900));
