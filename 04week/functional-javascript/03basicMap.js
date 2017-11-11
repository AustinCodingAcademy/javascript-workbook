'use strict';
// Task
// Convert the following code from a for-loop to Array#map:
//     function doubleAll(numbers) {
//       var result = []
//       for (var i = 0; i < numbers.length; i++) {
//         result.push(numbers[i] * 2)
//       }
//       return result
//     }
//     module.exports = doubleAll
//
// ## Arguments
//   * numbers: An Array of 0 to 20 Integers between 0 and 9
// ## Conditions
//
//   * Your solution should use Array.prototype.map()
//   * Do not use any for/while loops or Array.prototype.forEach.
//   * Do not create any unnecessary functions e.g. helpers.
// function doubleAll(numbers) {
const doubleAll = [1, 5, 10, 15];
const result = doubleAll.map(function(xTwo) {
  return xTwo * 2;
});
console.log(result);
// console.log(doubleAll);
}

module.exports = doubleAll
