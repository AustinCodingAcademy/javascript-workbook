// # Task: Hello World
// Write a function that takes an input string and returns it uppercased.

// ## Boilerplate
function upperCaser(input) {
  // SOLUTION GOES HERE
  return input.toUpperCase();
}

module.exports = upperCaser;

// # Task: Higher Order Functions
// Implement a function that takes a function as its first argument, a number num as its second argument, then executes the passed in function num times.
// Use the boilerplate code given to you below to get started. Most/all future exercises will provide boilerplate.

function repeat(operation, num) {
  // SOLUTION GOES HERE
  for (let i = 0; i < num; i++) operation();
}

// Do not remove the line below
module.exports = repeat;

// Task: Basics: Map
// Convert the following code from a for-loop to Array#map:

//     function doubleAll(numbers) {
//       var result = []
//       for (var i = 0; i < numbers.length; i++) {
//         result.push(numbers[i] * 2)
//       }
//       return result
//     }

function doubleAll(numbers) {
  // SOLUTION GOES HERE
  let result = numbers.map(number => {
    return number * 2;
  });
  return result;
}

module.exports = doubleAll;

// # Task: Basics: Filter
// Use Array#filter to write a function called getShortMessages.
// getShortMessages takes an array of objects with '.message' properties and returns an array of messages that are less than < 50 characters long.
// The function should return an array containing the messages themselves, without their containing object.

function getShortMessages(messages) {
  // SOLUTION GOES HERE
  let result = messages
    .filter(item => {
      return item.message.length < 50;
    })
    .map(item => {
      return item.message;
    });
  return result;
}

module.exports = getShortMessages;

// # Task: Every/Some
// Return a function that takes a list of valid users, and returns a function that returns true if all of the supplied users exist in the original list of users.
// You only need to check that the ids match.

function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    // SOLUTION GOES HERE
  };
}

module.exports = checkUsersValid;
