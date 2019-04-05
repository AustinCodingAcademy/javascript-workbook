// length will output a number
// can be used on a string or an array
let str = 'emily';
let arr = [1, 3, 1, 7, 9, 1];
console.log(str.length); // 5
console.log(arr.length); // 6

// concat joins two or more strings or arrays into a single array
// this does not change the existing strings or arrays, but returns a new one
let str2 = 'bob';
let arr2 = ['hello', 'whats', 'your','hello', 'name'];
let concatArr = arr.concat(arr2);
let concatStr = str.concat(str2);
console.log(concatStr); // emilybob
console.log(concatArr); // [ 1, 3, 1, 7, 9, 1, 'hello', 'whats', 'your', 'hello', 'name' ]

// indexOf searches a string or array for a specific item and returns the position of the first one found
// it will return -1 if the item is not found
console.log(str.indexOf('emily')); // 0
console.log(str.indexOf('e')); // 0
console.log(str.indexOf('y')); // 4th index of string 'emily'
console.log(arr.indexOf(1)); // 0 index
console.log(arr.indexOf('hi')); // -1 doesn't exist

// lastIndexOf searches a string or array for a specific item and returns the index of its last instance
// it will return -1 if the item is not found
console.log(str2.lastIndexOf('b')); // 2
console.log(arr.lastIndexOf(1)); // 5
console.log(arr2.lastIndexOf('hello')); // 3

// join creates and returns a new string out of an array
// it concatenates all of the elements of an array
// it joins at whatever is specified as an argument within the join method
let joinedArr = arr.join('');
let joinedArrComma = arr.join(',');
let joinedArrChar = arr.join('b');
console.log(joinedArr); // 131791
console.log(joinedArrComma); // 1,3,1,7,9,1
console.log(joinedArrChar); // 1b3b1b7b9b1

// split creates a new array
// it will split a string into an array of sub-strings
let newArrFromStr = str.split('');
console.log(newArrFromStr); // [ 'e', 'm', 'i', 'l', 'y' ]

// reverse will reassign the value of an array
// it reverses the order of the elements of the array
console.log(arr.reverse()); // [ 1, 9, 7, 1, 3, 1 ]

// sort will reassign the value of an array
// it sorts the elements depending on their UTF-16 code values
console.log(arr.sort()); // [ 1, 1, 1, 3, 7, 9 ]
console.log(arr2.sort()); // [ 'hello', 'hello', 'name', 'whats', 'your' ]

// slice returns a new array not including the selected items
// it removes up to but not including the second argument.
let sliced = arr2.slice(2);
console.log(sliced); // [ 'name', 'whats', 'your' ] (removed up to but not including the 2nd index)
let anotherSliced = arr.slice(2, 4);
console.log(anotherSliced); // [ 1, 3 ] (removed from index 2 up to but not including index 4)

// splice changes an array by removing, replacing or adding new elements
let months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
console.log(months); // [ 'Jan', 'Feb', 'March', 'April', 'June' ] inserts Feb in 1st index, replaces 0 elements.
months.splice(4, 1, 'May');
console.log(months); // [ 'Jan', 'Feb', 'March', 'April', 'May' ] Puts 'May' in 4th index and replaces 1 element at that index.

// pop changes the length of the original array
// by removing the last element from that array and returning it
let plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
plants.pop();
console.log(plants); // [ 'broccoli', 'cauliflower', 'cabbage', 'kale' ] removed tomato

// push returns a new array with a new length
// by adding one or more elements to the end of the array
let animals = ['pigs', 'goats', 'sheep'];
animals.push('cows');
console.log(animals); // [ 'pigs', 'goats', 'sheep', 'cows' ]

// shift changes the length of the original array
// by removing the first element of that array and returning it
let shiftArray = [1, 2, 3];
shiftArray.shift();
console.log(shiftArray); // [ 2, 3 ]

// unshift returns the new length of the array
// by adding one or more elements to the front of the array
let unshiftArray = [1, 2, 3];
unshiftArray.unshift(0, 1);
console.log(unshiftArray); // [ 0, 1, 1, 2, 3 ]

// forEach takes in a call back function (anonymous function) and loops thru the array
// it returns each element of the array
// it does not change the original array
let foreachArray = ['a', 'b', 'c'];
foreachArray.forEach(function(x) {
    console.log(x); // a
                    // b
                    // c
});