// # Task: Higher Order Functions
// Implement a function that takes a function as its first argument, a number num as its second argument, then executes the passed in function num times.
// Use the boilerplate code given to you below to get started. Most/all future exercises will provide boilerplate.

function repeat(operation, num) {
  // SOLUTION GOES HERE
  for (let i = 0; i < num; i++) operation();
}

// Do not remove the line below
module.exports = repeat;