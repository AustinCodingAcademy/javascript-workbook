function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    // SOLUTION GOES HERE
    return submittedUsers.every((user) => return {user.id === goodUsers.id} );
  };
}

module.exports = checkUsersValid
