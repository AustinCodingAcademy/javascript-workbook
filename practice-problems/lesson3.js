//1. Identify and explain the problem in the code below:

var a = 'Hello';

function helloWorld() {
  var b = 'World';
  return a + b;
}

console.log(b);

//Answer:
The variable is declared within the function helloWorld(), it will not be acessible outside that function, and we are not calling the function thus we wont get any output.
