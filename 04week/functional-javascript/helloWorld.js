// Excersize 1
function upperCaser(input) {
  return input.toUpperCase();
}

module.exports = upperCaser


//  Excersize 2
function repeat(operation, num) {
  for (var i = 0; i < num; i++) {
    operation(num);
  }
}

// Do not remove the line below
module.exports = repeat


//  Excersize 3
function doubleAll(numbers) {
  const doubles = numbers.map((number) => {
    return number * 2;
  });
  return doubles
}
module.exports = doubleAll


//  Excersize 4
function getShortMessages(messages) {
  return messages
    .filter(o => o.message.length < 50)
    .map(o => o.message)
};


module.exports = getShortMessages
