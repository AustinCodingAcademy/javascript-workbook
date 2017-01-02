//1. Identify and explain the problem in the code below:

var a = 'Hello';

function helloWorld() {
  var b = 'World';
  return a + b;
}

console.log(b);

//Answer: The variable b is declared inside the helloWorld function, therefore it is only available in that scope. To elements outside the function's scope, b may as well not exist. The program throws an error that b is not defined.
