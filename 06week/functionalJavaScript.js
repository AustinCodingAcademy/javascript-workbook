//Boilerplate

function upperCaser(input) {
  return input.toUpperCase();
}

module.exports = upperCaser;

function repeat(operation, num) {
  for (let i = 0; i < num; i++) {
    operation();
  }
}

//Implement a function that takes a function as its first argument, a number num as its second argument, then executes the passed in function num times.

module.exports = repeat;

//Convert the following code from a for-loop to Array#map:

function doubleAll(numbers) {
  return numbers.map(function(num) {
    return num * 2;
  });
}

module.exports = doubleAll;

//Use Array#filter to write a function called getShortMessages.

//getShortMessages takes an array of objects with '.message' properties and returns an array of messages that are less than < 50 characters long.

//The function should return an array containing the messages themselves, without their containing object.

function getShortMessages(messages) {
  // SOLUTION GOES HERE
  console.log(messages);

  let newMessages = messages
    .filter((message, i, array) => {
      return message.message.length < 50;
      //all messages under 50 characters
    })
    .map((message, i, array) => {
      return message.message;
    });
  return newMessages;
}

module.exports = getShortMessages;

//function checkUsersValid(goodUsers) {
//return function allUsersValid(submittedUsers) {
//goodUsers.some(checkUsersValid);
//};
//}

//Return a function that takes a list of valid users, and returns a function that returns true if all of the supplied users exist in the original list of users.

//module.exports = checkUsersValid;

function countWords(inputWords) {
  var countsFruits = inputWords.reduce(function(countsFruits, fruit) {
    if (fruit in countsFruits) {
      countsFruits[fruit]++;
    } else {
      countsFruits[fruit] = 1;
    }
    return countsFruits;
  }, {});
}

module.exports = countWords;

function reduce(arr, fn, initial) {
  arr.reduce;
}

module.exports = reduce;

[0, 1, 2, 3, 4].reduce(function(
  accumulator,
  currentValue,
  currentIndex,
  array
) {
  return accumulator + currentValue;
});

/// 5 Every Some
function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    return submittedUsers.every(function(submittedUser) {
      return goodUsers.some(function(goodUser) {
        return goodUser.id === submittedUser.id;
      });
    });
  };
}

module.exports = checkUsersValid;

// 6 Reduce
//Given an Array of strings, use Array#reduce to create an object that contains the number of times each string occured in the array. Return the object directly (no need to console.log).
function countWords(inputWords) {
  return inputWords.reduce(function(resultObj, word) {
    resultObj[word] = ++resultObj[word] || 1;
    return resultObj;
  }, {});
}

module.exports = countWords;


// 7 Call


function duckCount() {
  // SOLUTION GOES HERE
}

module.exports = duckCount