'use strict';
// Return a function that takes a list of valid users, and returns a function that returns true if all of the supplied users exist in the original list of users.
//
// You only need to check that the ids match.
//
// ## Example
//
//     var goodUsers = [
//       { id: 1 },
//       { id: 2 },
//       { id: 3 }
//     ]
//
//     // `checkUsersValid` is the function you'll define
//     var testAllValid = checkUsersValid(goodUsers)
//
//     testAllValid([
//       { id: 2 },
//       { id: 1 }
//     ])
//     // => true
//
//     testAllValid([
//       { id: 2 },
//       { id: 4 },
//       { id: 1 }
//     ])
//     // => false
//
// ## Arguments
//
//   * goodUsers: a list of valid users
//
// Use array#some and Array#every to check every user passed to your returned function exists in the array passed to the exported function.


const checkUsersValid = (goodArr) => {
     return (testArr) => {
       return testArr.every(testUser => {
         return goodArr.some(goodUser => goodUser.id === testUser.id)
       })
     }
   }
       // SOLUTION GOES HERE



module.exports = checkUsersValid
