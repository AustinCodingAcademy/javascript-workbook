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
