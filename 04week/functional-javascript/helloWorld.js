// Global Array
const carsArray = [
  'Audi',
  'Benz',
  'Corrola',
  'Dart'
];


// 1
function upperCaser(input) {
  return input.toUpperCase();
}
module.exports = upperCaser


// 2
function repeat(operation, num) {
  for (let i = 0; i < num; i++) {
    operation(num);
  }
}
module.exports = repeat
// function repeat(operation, num) {
//   // Set the breakout
//   if (num <= 0) return;
//   // Call operation function
//   operation()
//   // Recursive call with num as the iterator going down by one
//   return repeat(operation, --num)
// }
// module.exports = repeat


// 3
// function doubleAll(numbers) {
//   var result = []
//   for (var i = 0; i < numbers.length; i++) {
//     result.push(numbers[i] * 2)
//   }
//   return result
// }
// module.exports = doubleAll
const numbers = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20
];
function doubleAll(numbers) {
  return numbers.map(num => num * 2);
}
module.exports = doubleAll



// 4
function getShortMessages(messages) {
  // Give me back
  return messages
    // Filter by iterating over the array of objects with messages that are < 50 char
    .filter(o => o.message.length < 50)
    // Give me back just the message values
    .map(o => o.message)
}
module.exports = getShortMessages



// 5
