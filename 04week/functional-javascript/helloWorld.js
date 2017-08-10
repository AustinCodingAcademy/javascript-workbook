function upperCaser(input) {
  return input.toUpperCase();
}

//module.exports = upperCaser

//module.exports = upperCaser

function repeat(operation, num) {
  if (num <= 0) return
  operation()
  return repeat(operation, --num)
}

//module.exports = repeat



function doubleAll(numbers) {
  return numbers.map(element => element * 2);
}

//module.exports = doubleAll

function getShortMessages(messages) {
  return messages.map(messageObj => messageObj['message']).filter(message => message.length < 50);
}
//module.exports = getShortMessages

function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
        return
  };
}
module.exports = checkUsersValid
