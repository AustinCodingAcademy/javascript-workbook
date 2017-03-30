//1 Hello ES6

// console.log('HELLO ES6');

//2 Template strings
// var name = process.argv[2];
// var lowerName = name.toLowerCase();
//

// console.log(`Hello, ${name}!
// Your name lowercased is "${lowerName}".`);

//3
// var inputs = process.argv.slice(2);
// var result = inputs.map(s => s[0])
//   .reduce((soFar, s) => soFar + s);
//
// console.log(`[${inputs}] becomes "${result}"`);
//4
// var foot = {
//   kick: function () {
//     this.yelp = "Ouch!";
//     setImmediate(() => {
//       console.log(this.yelp);
//     });
//   }
// };
// foot.kick();
//5
//
// let userArray = process.argv.slice(2);
//
// let [, username, email] = userArray;
//
// console.log({ username, username, email, email });

//6
// var numbers = process.argv.slice(2);
// var min = Math.min(...numbers);
// console.log(`The minimum of [${numbers}] is ${min}`);
//7
// module.exports = (...args) => {
//   var sum = args.reduce((soFar, value) => soFar + value, 0);
//   return sum / args.length;
// };
//8
module.exports = function midpoint(...args) {
  var midpoints = midpoint.reduce((soFar, value) => soFar + value, 1)
  return midpoints / args.legnth
};
