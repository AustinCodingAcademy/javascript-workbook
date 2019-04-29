// The .forEach() method can be called on any array. The prototype you see is just the basis of the array in the language of javascript.
// For now, don't worry or focus your attention on prototype, this is something you can figure out later. It irrelevant at the moment.
// .forEach() takes a callback function as it's only parameter. This function iterates through all of the values in an array and uses
// the callback function passed to it to do something with the value. If you have ever used
// a for loop that looks something like this: for(let i =0; i < arr.length; i++){//do something} then you have essentially created the functionality
// of a forEach loop in long-hand.
// Here is an example of a forEach loop:
// const colors = ['orange', 'red', 'blue', 'yellow', 'green', 'purple'];
// colors.forEach((color) => {
//     console.log(`My favorite color is ${color}`);
// });

// forEach Under The Hood
function foEach(array, callback) {
    for(var i=0; i < array.length; i++) {
        callback(array[i], i, array);
    }
}

//for each example
const pets = ['dog', 'cat', 'fish'];

pets.forEach(function(element) {
  console.log(element);
});

// Example 1
var alphabet ="";
var letters =['a','b','c','d'];

letters.forEach(function(char) {
    alphabet += char;
});
console.log(alphabet);


// Example 2
var days = ['Sunday', 'Monday', 'Tuesday'];
days.forEach((element, index, days) => {
    console.log(`${index} : ${element}`)
});


// Callback
function doHomework(subject, callback) {
    console.log(`Starting my ${subject} homework`);
    callback();
}  

doHomework('math', function() {
    console.log('Fininshed my homework');
});
