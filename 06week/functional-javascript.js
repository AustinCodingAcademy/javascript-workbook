function upperCaser(input) {
  // SOLUTION GOES HERE
  return input.toUpperCase();
}

module.exports = upperCaser;

function repeat(operation, num) {
  // SOLUTION GOES HERE
  for (let i = 0; i < num; num++) {
    return operation(num);
  }
}

// Do not remove the line below
module.exports = repeat;

// Higher Order Function #1 actual solution with recursion
// function repeat(operation, num) {
//   if (num <= 0) return
//   operation()
//   return repeat(operation, --num)
// }

// module.exports = repeat

// Map - rewrite the function using .map()
// function doubleAll(numbers) {
//   var result = []
//   for (var i = 0; i < numbers.length; i++) {
//     result.push(numbers[i] * 2)
//   }
//   return result
// }

// module.exports = doubleAll
function doubleAll(numbers) {
  // SOLUTION GOES HER
  let num = numbers.map(numbers => numbers * 2);
  return num;
}
module.exports = doubleAll;

// Here's the official solution in case you want to compare notes:

// ────────────────────────────────────────────────────────────────────────────────
//     module.exports = function doubleAll(numbers) {
//       return numbers.map(function double(num) {
//         return num * 2
//       })
//     }

// Filter: getShortMessages takes an array of objects with '.message' properties and returns an array of messages that are less than < 50 characters long.
function getShortMessages(messages) {
  // SOLUTION GOES HERE
  // var newArray = arr.filter(callback(element[, index[, array]])[, thisArg])
  let newMessage = messages
    .filter(item => item.message.length < 50)
    .map(item => item.message);
  return newMessage;
}

module.exports = getShortMessages;

// Here's the official solution in case you want to compare notes:

// ────────────────────────────────────────────────────────────────────────────────
//     module.exports = function getShortMessages(messages) {
//       return messages.filter(function(item) {
//         return item.message.length < 50
//       }).map(function(item) {
//         return item.message
//       })
//     }

// Every and Some:
// # Task
// Return a function that takes a list of valid users, and returns a function that returns true if all of the supplied users exist in the original list of users.
// You only need to check that the ids match.

function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    // SOLUTION GOES HERE
    // SOME: arr.some(callback(element[, index[, array]])[, thisArg]) The some() method tests whether at least one element in the array passes the test implemented by the provided function.
    // EVERY: arr.every(callback(element[, index[, array]])[, thisArg]) The every() method tests whether all elements in the array pass the test implemented by the provided function.

    submittedUsers.every(item => {
      return submittedUsers.some(item => item.validUsers === item.goodUsers);
    });
  };
}

module.exports = checkUsersValid;

function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    // SOLUTION GOES HERE
    return submittedUsers.every(suser => {
      return goodUsers.some(guser => guser.id === suser.id);
    });
  };
}
