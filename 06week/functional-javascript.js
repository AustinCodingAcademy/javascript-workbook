//EXCERSISE 1
// # Task

// Write a function that takes an input string and returns it uppercased.

// ## Arguments

//   * input: a String of random words (lorem ipsum).

//## Boilerplate

function upperCaser(input) {
  // SOLUTION GOES HERE
  return input.toUpperCase();
}

module.exports = upperCaser;
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////

//EXCERSISE 2
// # Task

// Implement a function that takes a function as its first argument, a number num as its second argument, then executes the passed in function num times.

// Use the boilerplate code given to you below to get started. Most/all future exercises will provide boilerplate.

// ## Arguments

//   * operation: A Function, takes no arguments, returns no useful value.
//   * num: the number of times to call `operation`

// ## Resources

//   * https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions_and_function_scope
//   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype

// ## Hints

//   * Don't overthink it, the code should be rather simple.
//   * It's ok to use a loop in your implementation, bonus points if you use recursion instead.
//   * You may notice some output. That is coming from the function we passed you.
//   * You do not need to console.log anything.

// ## Boilerplate

function repeat(operation, num) {
  // SOLUTION GOES HERE
  for (let i = 0; i < num; i++) {
    operation();
  }
}

// Do not remove the line below
module.exports = repeat;

/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////

//EXCERSISE 3
// # Task

// Convert the following code from a for-loop to Array#map:

//     function doubleAll(numbers) {
//       var result = []
//       for (var i = 0; i < numbers.length; i++) {
//         result.push(numbers[i] * 2)
//       }
//       return result
//     }

//     module.exports = doubleAll

// ## Arguments

//   * numbers: An Array of 0 to 20 Integers between 0 and 9

// ## Conditions

//   * Your solution should use Array.prototype.map()
//   * Do not use any for/while loops or Array.prototype.forEach.
//   * Do not create any unnecessary functions e.g. helpers.

// ## Resources

//   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

// ## Boilerplate

function doubleAll(numbers) {
  //var result = []
  //       for (var i = 0; i < numbers.length; i++) {
  //         result.push(numbers[i] * 2)
  //       }
  //       return result
  var arr = numbers.map(element => {
    return parseInt(element) * 2;
  });
  return arr;
}

module.exports = doubleAll;
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////

//EXCERSISE 4
// # Task

// Use Array#filter to write a function called getShortMessages.

// getShortMessages takes an array of objects with '.message' properties and returns an array of messages that are less than < 50 characters long.

// The function should return an array containing the messages themselves, without their containing object.

// ## Arguments

//   * messages: an Array of 10 to 100 random objects that look something like this:

//     {
//       message: 'Esse id amet quis eu esse aute officia ipsum.' // random
//     }

// ## Conditions

//   * Do not use any for/while loops or Array#forEach.
//   * Do not create any unnecessary functions e.g. helpers.

// ## Hint

//   * Try chaining some Array methods!

// ## Example

//     [ 'Tempor quis esse consequat sunt ea eiusmod.',
//       'Id culpa ad proident ad nulla laborum incididunt.',
//       'Ullamco in ea et ad anim anim ullamco est.',
//       'Est ut irure irure nisi.' ]

// ## Resources

//   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
//   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

// ## Boilerplate

function getShortMessages(messages) {
  // SOLUTION GOES HERE
  var objectsMessagesOnly = messages.filter(object => {
    if (object.message.length < 50) {
      return object.message;
    }
  });
  let onlyMessages = objectsMessagesOnly.map(element => {
    return element.message;
  });
  return onlyMessages;
}

module.exports = getShortMessages;
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////

//EXCERSISE 5
// # Task

// Return a function that takes a list of valid users, and returns a function that returns true if all of the supplied users exist in the original list of users.

// You only need to check that the ids match.

// ## Example

//     var goodUsers = [
//       { id: 1 },
//       { id: 2 },
//       { id: 3 }
//     ]

//     // `checkUsersValid` is the function you'll define
//     var testAllValid = checkUsersValid(goodUsers)

//     testAllValid([
//       { id: 2 },
//       { id: 1 }
//     ])
//     // => true

//     testAllValid([
//       { id: 2 },
//       { id: 4 },
//       { id: 1 }
//     ])
//     // => false

// ## Arguments

//   * goodUsers: a list of valid users

// Use array#some and Array#every to check every user passed to your returned function exists in the array passed to the exported function.

// ## Conditions

//   * Do not use any for/while loops or Array#forEach.
//   * Do not create any unnecessary functions e.g. helpers.

// ## Resources

//   * https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/every
//   * https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/some

// ## Boilerplate

function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    // SOLUTION GOES HERE
    return submittedUsers.every(user => {
      return goodUsers.includes(user);
    });
  };
}

module.exports = checkUsersValid;
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////

//EXCERSISE 6
// # Task

// Given an Array of strings, use Array#reduce to create an object that contains the number of times each string occured in the array. Return the object directly (no need to console.log).

// ## Example

//     var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']

//     console.log(countWords(inputWords))

//     // =>
//     // {
//     //   Apple: 2,
//     //   Banana: 1,
//     //   Durian: 3
//     // }

// ## Arguments

//   * inputWords: An array of random Strings.

// ## Conditions

//   * Do not use any for/while loops or Array#forEach.
//   * Do not create any unnecessary functions e.g. helpers.

// ## Resources

//   * https://en.wikipedia.org/wiki/Reduce_(higher-order_function)
//   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

// ## Boilerplate

function countWords(inputWords) {
  // SOLUTION GOES HERE

  return inputWords.reduce((acc, input) => {
    if (acc[input]) {
      acc[input]++;
    } else {
      acc[input] = 1;
    }
    return acc;
  }, {});
}

module.exports = countWords;
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////

//EXCERSISE 7
// # Task

// Implement Array#reduce using recursion.

// To test your reduction works correctly we will use your reduce implementation to execute our solution to the previous basic_reduce problem. i.e. your reduce function will be passed an array of words, and a function, and an initial value which will return an object containing the counts for each word found in the array. You don't need to implement this
// functionality, it will be supplied to your reduce implementation.

// For simplicity, your implementation of reduce need not replicate the behaviour of a reduce missing an initial value. You may assume the initial value will always be supplied.

// ## Arguments

//   * arr: An Array to reduce over
//   * fn: Function to use as the reduction step. Like regular Array#reduce, this function must be passed previousValue, currentValue, index and the array we're iterating over.
//   * init: Initial value of the reduction. Unlike Array#reduce, this value is required (and you may assume it will always be supplied).

// ## Example

//     // Your reduce function should behave the same as a
//     // regular Array#reduce, but it will take the array
//     // to operate on as the first argument:

// reduce(
//   [1, 2, 3],
//   function(prev, curr, index, arr) {
//     return prev + curr;
//   },
//   0
// )
//     // => 6

// ## Conditions

//   * Do not use any for/while loops.
//   * Do not use any Array methods like Array#map or Array#reduce.

// ## Resources

//   * https://en.wikipedia.org/wiki/Recursion
//   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

// ## Boilerplate

function reduce(arr, fn, initial) {
  if (arr.length > 0) {
    const result = fn(initial, arr[0]);
    arr.shift();
    return reduce(arr, fn, result);
  }
  return initial;
}

module.exports = reduce;
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////

//EXCERSISE 8
// # Task:

// Write a function duckCount that returns the number of arguments passed to it which have a property 'quack' defined directly on them. Do not match values inherited from prototypes.

// Example:

//     var notDuck = Object.create({quack: true})
//     var duck = {quack: true}
//     duckCount(duck, notDuck) // 1

// ## Arguments

//   * You will be passed 0-20 arguments. Each argument could be of any type with any properties. Some of these items will have a 'quack' property.

// ## Conditions

//   * Do not use any for/while loops or Array#forEach.
//   * Do not create any counter/accumulator variables.
//   * Do not create any unnecessary functions e.g. helpers.

// ## Hint

//   * The `arguments` variable, available in every function, is an *Object* that quacks like an *Array*:

//     {
//       0: 'argument0',
//       1: 'argument1', // etc
//       length: 2
//     }

// ## Resources

//   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call
//   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
//   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in
//   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice#Array-like
//   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope/arguments

// ## Boilerplate

function duckCount() {
  let quackCount = 0;
  for (const obj of arguments) {
    if (Object.prototype.hasOwnProperty.call(obj, "quack")) {
      quackCount++;
    }
  }

  return quackCount;
}

module.exports = duckCount;
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////

//EXCERSISE 9
// # Task

// Use partial application to create a function that fixes the first argument to console.log.  i.e. Implement a logging function that prepends a namespace string to its output.

// Your implementation should take a namespace String and return a function that prints messages to the console with the namespace prepended.

// You should use Function#apply to implement the partial application.

// Make sure all arguments passed to the returned logging function are printed.

//  Print the output to the console directly

// ## Arguments

//   * namespace: a String to prepend to each message passed to the returned function.

// ## Example

//     var info = logger('INFO:')
//     info('this is an info message')
//     // INFO: this is an info message

//     var warn = logger('WARN:')
//     warn('this is a warning message', 'with more info')
//     // WARN: this is a warning message with more info

// ## Conditions

//   * Do not use Function#bind
//   * Use Function#apply

// ## Boilerplate

var slice = Array.prototype.slice;

function logger(namespace) {
  // SOLUTION GOES HERE
  let arr = namespace.slice(0, namespace.length);

  return;
}

module.exports = logger;
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////

//EXCERSISE 10

/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////

//EXCERSISE 11

/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////

//EXCERSISE 12

/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////

//EXCERSISE 13

/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////

//EXCERSISE 14

/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////

//EXCERSISE 15

/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////

//EXCERSISE 16

/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////

//EXCERSISE 17

/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////

//EXCERSISE 18

/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
