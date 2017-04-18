function checkUsersValid(goodUsers) {
      return function allUsersValid(submittedUsers) {
        // SOLUTION GOES HERE
        return function valid(users){
          return goodusers.every(users);
        }
      };
    }

module.exports = checkUsersValid
