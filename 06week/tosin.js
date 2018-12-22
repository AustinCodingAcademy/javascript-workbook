function upperCaser(input) {
  // SOLUTION GOES HERE
  return input.toUpperCase();
}

module.exports = upperCaser;

function repeat(operation, num) {
  // SOLUTION GOES HERE
  for (let i = 0; i < num; i++) {
    operation();
  }
}

// Do not remove the line below
module.exports = repeat;

function doubleAll(numbers) {
  // SOLUTION GOES HERE
  return numbers.map(number => number * 2);
}

module.exports = doubleAll;

function getShortMessages(messages) {
  // SOLUTION GOES HERE
  return messages
    .filter(msg => msg.message.length < 50)
    .map(msg => msg.message);
}

module.exports = getShortMessages;

function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    // SOLUTION GOES HERE
    return submittedUsers.every(suser => {
      return goodUsers.some(guser => guser.id === suser.id);
    });
  };
}

module.exports = checkUsersValid;

function countWords(inputWords) {
  // SOLUTION GOES HERE
  return inputWords.reduce((acc, curr) => {
    if (acc[curr]) {
      acc[curr] += 1;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {});
}

module.exports = countWords;
