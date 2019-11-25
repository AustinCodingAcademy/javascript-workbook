const array = [1, 12, 44];
// // find-----------------
function findFromScratch (arr, fn) {
for(let i = 0; i < arr.length; i++) {
if (fn(arr[i], i, arr) === true) {
console.log(arr[i]);
break;
}
}
}
// you code here
// use some kind of loop to go through the array and find the first element
// that causes the passed in function to return true
// once that happens stop and return the current value of the array

// return the number that passes the test (returns true) or undefined if none pass the test

const findFromScratchTwo = arr => {
 console.log (arr.find(num => num > 10))
}
findFromScratchTwo (array)

//syntax on how we will call our custom function
findFromScratch (array, function(element, i, arr) {
return element > 10;
});
// expected output: 12



// findIndex-----------------
function findIndexFromScratch (arr, fn) {
for(let i = 0; i < arr.length; i++) {
if (fn(arr[i], i, arr) === true) {
console.log(i);
break;
}
}
}
// you code here
// use some kind of loop to go through the array and find the first element that causes the passed in function to return true
// once that happens stop and return the current index of the array that we are on

// return the array index that passes the test (returns true) or -1 if none pass the test

const findFromScratchToo = arr => {
  console.log (arr.findIndex(num => num > 10))
}
  findFromScratchToo (array)
//syntax on how we will call our custom function
findIndexFromScratch (array, function(element, index, arr) {
// you code here
return element > 10;
});
// expected output: 1