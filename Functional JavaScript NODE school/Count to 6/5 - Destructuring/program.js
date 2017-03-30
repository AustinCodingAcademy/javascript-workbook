//5 Destructuring

let userArray = process.argv.slice(2);

let [, username, email] = userArray;

console.log({ username, username, email, email });
