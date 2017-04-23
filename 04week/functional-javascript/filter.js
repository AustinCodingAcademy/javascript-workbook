function getShortMessages(messages) {
      // SOLUTION GOES HERE
  return messages.filter(function(each){
    return each.message.length < 50
  }).map(function(each){
    return each.message

  });
};
      //   .length < 50;
      // }).map(function(message){
      //       return message.length < 50;
      //     });
      // // }).filter(function(message){
      //   return
      // })

      // map(function(message){
      //   return message;
      // });




module.exports = getShortMessages
