//1 Hello ES6

// console.log('HELLO ES6');

//2 Template strings
// var name = process.argv[2];
// var lowerName = name.toLowerCase();
//
//2.5
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

let userArray = process.argv.slice(2);

let [, username, email] = userArray;

console.log({ username, username, email, email });
// {username: "jdoe", email: "john@doe.com"}

/*
 */
