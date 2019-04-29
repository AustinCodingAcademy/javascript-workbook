// The .map() method of an array is used to create a new array that is in someway, a transformation of an existing array.
// Similarly to a forEach loop it takes a callback function, () => {}, as it's only parameter and passes every value/element
// in the array into the callback function. In the new array returned by the map method, each new value is assigned to be equal
//  to whatever the callback function returns when passed the original value. Let's look at an example of a map function in action:

const colors = ['orange','red','blue','yellow','green','purple'];

const tieDyes = colors.map((color) => {
    return `tieDyed-${color}`
});
console.log(tieDyes);