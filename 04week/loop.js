// // http://awanderingreader.com/javascript-under-the-hood-building-our-own-foreach-and-map-functions/

// // Challenge 3
// function map(array, callback) {
//     var newArr = [];
//     for (var i = 0; i < array.length; i++) {
//       newArr.push(callback(array[i]));
//     }
//     return newArr;
// }
  
// function multiplyByTwo(num) {
// return num * 2;
// }
// console.log(map([1, 2, 3], multiplyByTwo));
// /////////////////////////////

// // Challenge 4
function forEach(array, callback) {
	for(let i = 0; i < array.length; i++) {
		callback(array[i]);
	}
}
// // //Extension 1
// // function mapWith(array, callback) {
// // 	return forEach(array, callback)
// // }
// // see for yourself if your forEach works!
// var alphabet = '';
// var letters = ['a', 'b', 'c', 'd'];

// forEach(letters, function(char) {
//   alphabet += char;
// });
// console.log(alphabet);   //prints 'abcd'

// Use a do...while loop to console.log the numbers from 1 to 1000.
let i = 0;
do {
    i++;
    // console.log(i);
} while (i < 1001);

// Create an object (an array with keys and values) called person with the following data:
// firstName: "Jane"
// lastName: "Doe"
// birthDate: "Jan 5, 1925"
// gender: "female"
// Use a for...in loop and if statement to console.log the value associated with the key birthDate if the birth year is an odd number.
const person = {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female"
}
for (const allKeys in person) {
    if (allKeys == 'birthDate') {
        const splitDate = person.birthDate.split('');
        console.log(splitDate)
        const lastElement = splitDate[splitDate.length - 1];
        if (lastElement % 2 !== 0) {
            // console.log(person[allKeys]);
        }
    }
}
// Create an arrayOfPersons that contains mulitiple objects. You can simply copy/paste the person object you made above multiple times. Feel free to change the values to reflect multiple people you might have in your database.
// Use .map() to map over the arrayOfPersons and console.log() their information.
// Use .filter() to filter the persons array and console.log only males in the array.
// Use .filter() to filter the persons array and console.log only people that were born before Jan 1, 1990.
const arrayOfPersons = [
    {
        firstName: "Jane",
        lastName: "Doe",
        birthDate: "Feb 5, 1920",
        gender: "female"
    },
    {
        firstName: "Paul",
        lastName: "Soe",
        birthDate: "Jul 15, 1989",
        gender: "male"
    },
    {
        firstName: "Reel",
        lastName: "Moe",
        birthDate: "January 15, 1990",
        gender: "female"
    }
];
const allObjects = arrayOfPersons.map(x=>x);
console.log("ALL OBJECTS",allObjects,"\n//////////////////////////////////////")
const allMales = arrayOfPersons.filter( x => x.gender == 'male');
console.log("ALL MALES",allMales,"\n//////////////////////////////////////");
const oldOnes = arrayOfPersons.filter(x => {
    const splitDate = x.birthDate.split(' ');
    const lastElement = splitDate[splitDate.length - 1];
    return lastElement < 1990;
});
console.log("OLD ONES",oldOnes,"\n//////////////////////////////////////");
