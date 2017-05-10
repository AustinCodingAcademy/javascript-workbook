function getShortMessages(messages) {
  // SOLUTION GOES HERE
  return messages.filter(function(msg){return msg.length < 50;});
}
module.exports = getShortMessages
