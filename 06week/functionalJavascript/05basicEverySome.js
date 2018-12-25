// # Task: Every/Some
// Return a function that takes a list of valid users, and returns a function that returns true if all of the supplied users exist in the original list of users.
// You only need to check that the ids match.

function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    let result = submittedUsers.every(submittedUser => {
      return goodUsers.some(goodUser => {
        return goodUser.id === submittedUser.id;
      });
    });
    return result;
  };
}

module.exports = checkUsersValid;
