//1. Identify and explain the problem in the code below:

var a = 'Hello';

function helloWorld() {
  var b = 'World';
  return a + b;
}

console.log(b);

//Answer:b is not defined outside the scope of the function. Since variable b was created inside the helloWorld function it is only abavilable in that function. The error is caused because when it is called outside that function the program cannot recognize it.
