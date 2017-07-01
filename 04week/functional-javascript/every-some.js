function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
        // SOLUTION GOES HERE
    return submittedUsers.every(function(users){
      return goodUsers.some(function (validuser){
        return users.id === validuser.id;
      })
    })

  }

};


module.exports = checkUsersValid
