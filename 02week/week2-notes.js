//Create an array
const students = ["Chris", "Dani", "Lucy"];

console.log(students);

//length
console.log(students.length);

//Access an array item
const first = students[0];
console.log(first);
console.log(students[2]);

const last = students[students.length - 1];
console.log(last);

//Loop over an array
students.forEach(function(item, index, array) {
  console.log(item, index);
});

//Add to end of an array
students.push("Karime");
console.log(students);

//Remove from end of an array
students.pop();
console.log(students);

//Remove from the front of an array
students.shift();
console.log(students);

//Add to the front of an array
students.unshift("Chris");
console.log(students);

//Find the index of an item in the array
console.log(students.indexOf("Dani"));

//Remove an item from an indexed position
const items = ["car", "horse", "ball", "house"];
let removedItem = items.splice(1, 1);
console.log(removedItem);
//slice removed the item started at index 1, and removed 1 item.

//Remove an items from an indexed position
const things = ["car", "horse", "ball", "house"];
const removedItems = things.splice(1, 2);
console.log(removedItems);
//slice removed the item started at index 1, and removed 2 items.

// other array methods you should know and practice before class
// .toString()
// .join()
// .includes()
// .indexOf()
// .slice()
// .lastIndexOf()
// .concat()
// .keys()
// .entries()




// Break for notes about Objects
// Specifically two ways to acccess the objects "key : value pairs".
// The above practice was about arrays

// You can access information stored in objects in two ways:

// objectName.propertyName
console.log(person.firstName) // => "Keith"

//objectName["propertyName"]
console.log(person["firstName"]) // => "Keith"