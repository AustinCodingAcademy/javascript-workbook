'use strict'

// Create an object and assign it to a variable named "partnerObj"
// Make 5 key:value pairs and 1 method
const partnerObj = {
    firstName: "Chase",
    lastName: "Turner",
    age: 24,
    hairColor: "Black",
    fullName() {
      return `Hello, my name is ${this.firstName} ${this.lastName}`;
    }
};

// Print out 2 values of the partnerObj
console.log(partnerObj.age, partnerObj.hairColor);

// Print out the result of the partnerObj method
console.log(partnerObj.fullName());

// Reassign 1 value in the partnerObj to 'cars'
partnerObj.age = "cars"

// Make an array from all the object keys, store in a variable named partnerArr
const partnerArr = Object.keys(partnerObj);
console.log(partnerArr);

// For every key in the object, print out the key and value
for (i in partnerArr) {
  console.log(partnerArr[i]);
  console.log(partnerObj[partnerArr[i]])
}

// For every key in the object, print out the key and value
for (const prop in partnerObj) {
  console.log(`${prop}
${partnerObj[prop]}`);
}
