function getShortMessages(messagesArray) {
  // SOLUTION GOES HERE
  console.log(messagesArray);
  return messagesArray.filter(function (messageObject) {
    return messageObject['message'].length < 50;
  }).map(function (messageObject) {
    //access the string within the object
    return messageObject['message'];
  });
}

module.exports = getShortMessages


/*
module.exports = function getShortMessages(messages) {
      return messages.filter(function(item) {
        return item.message.length < 50
      }).map(function(item) {
        return item.message
      })
    }
*/
