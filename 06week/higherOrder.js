'use strict';

const assert = require('assert');

//random array of elements

let array1 = [1,2,3,4,5,6]

//this is my callback function that changes the array in some way, in this case to increase the array
function incrimenter(num){
  if(num<4){
    return (num + 2)
  } else {
    return (num * 2)
  }
}

//This function takes in the array and passes each value into the callback function to increase the array
function forEach(array, callback) {
  let changedElements = [];
  for (let i=0; i < array.length; i++){
    let converter = incrimenter(array[i]);
    changedElements.push(converter);
  }
  return changedElements;
}

console.log(forEach(array1, incrimenter));

//another random array to test my Map function
let array2 = [99,87,23,67,13,77];

//This is my callback function, which will change the number grades to letter grades
let gradeConverter = function(num){
  if (num <= 100 && num >= 90){
    return 'A';
  } if (num <= 89 && num >= 80){
    return 'B';
  } if (num <= 79 && num >= 70){
    return 'C';
  } if (num <= 69) {
    return 'F';
  }
};

//The map function takes in the array, runs each element through the gradeConverter function and returns a new array
function map(array, callback){
  let convertedArray = [];
  for (let i=0; i < array.length; i++){
      let element = array[i];
      let converted = callback(element);
      convertedArray.push(converted);
    }
    return convertedArray;
}

let classGrades = map(array2, gradeConverter);

console.log(classGrades);

//my third random array of numbers
let array3 = [1,2,3,4,5];

//this function returns true when the number passed into it is even
let evenFilter = function(num){
  return (num%2 === 0);
};

//my filter function runs each item in my array through the evenFilter function, returning only the even numbers in a new array
function filter(array, callback){
  let savedOff = [];
  for (let i=0; i < array.length; i++){
    let element = array[i];
    if (callback(element) === true){
      converted2 = array[i];
      savedOff.push(converted2);
    }
  }
  return savedOff;
}

let filtered = filter(array, evenFilter);

console.log(filtered);

//forth random array of students by gender
let array4 = ["Girl", "Boy", "Girl", "Boy", "Boy", "Boy"];

//function to check if there are any boys in the class, returns true if true
let areSomeStudentsBoys = function(student){
  return student === "Boy";
};

//takes in the array4 elements and checks to see if any of them are === "Boy", If true function returns true without checking the rest of the values
function some(array, callback) {
  for (let i=0; i < array.length; i++){
    let element = array[i];
    console.log(element);
    if (callback(element) === true){
      return true;
    }
  }
  return false;
}

let someCheck = some(array4, areSomeStudentsBoys);

console.log(someCheck);

//forth random array of students by gender
let array5 = ["Boy", "Boy", "Girl", "Boy", "Boy", "Boy"];

//function to check if there are any boys in the class, returns true if true
let areAllStudentsBoys = function(student){
  return student != "Boy"
};

//takes in the array5 elements and checks to see if all of them are === "Boy", returns true if all are boys, pops out false if it hits any girls
function every(array, callback) {
  for (let i=0; i < array.length; i++){
    let element = array[i];
    console.log(element);
    if (callback(element) == true){
      return false;
    }
  }
  return true;
}

let everyCheck = every(array5, areAllStudentsBoys);

console.log(everyCheck);

if (typeof describe === 'function') {

  describe('#forEach()', () => {
    it('should call the callback the array.length number of times', () => {
      let count = 0;
      forEach([1, 2, 3], () => {
        count++;
      });
      assert.equal(count, 3);
    });
  });

  describe('#map()', () => {
    const arr = [1, 2, 3];
    const mapped = map(arr, (num) => {
      return num * num;
    });
    it('should return new array with mapped items', () => {
      assert.deepEqual(mapped, [1, 4, 9]);
    });
    it('should not affect the original array', () => {
      assert.deepEqual(arr, [1, 2, 3]);
    })
  });

  describe('#filter()', () => {
    it('should return an array of items that pass the predicate test', () => {
      const filtered = filter([1, 2, 3], (num) => {
        return num % 2 === 0;
      });
      assert.deepEqual(filtered, [2]);
    });
  });

  describe('#some()', () => {
    let count = 0;
    const somed = some([1, 2, 3, 4], (num) => {
      count++;
      return num % 2 === 0;
    });
    it('should return true if at least one item passes the predicate test', () => {
      assert.equal(somed, true);
    });
    it('should stop at the first item that passes the predicate test', () => {
      assert.equal(count, 2);
    });
    it('should return false if no items pass the predicate test', () => {
      const somed = some([1, 3, 5], (num) => {
        return num % 2 === 0;
      });
      assert.equal(somed, false);
    });
  });

  describe('#every()', () => {
    it('should return true if at all passes the predicate test', () => {
      const everied = every([2, 4, 6], (num) => {
        return num % 2 === 0;
      });
      assert.equal(everied, true);
    });
    let count = 0;
    const everied = every([2, 3, 4, 5], (num) => {
      count++;
      return num % 2 === 0;
    });
    it('should return false if any item fails the predicate test', () => {
      assert.equal(everied, false);
    });
    it('should stop at the first item that fails the predicate test', () => {
      assert.equal(count, 2);
    });
  });

} else {

  console.log('Only run the tests on this one!')

}
