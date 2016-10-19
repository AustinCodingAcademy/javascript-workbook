//1. Identify and explain the problem in the code below:

var a = 'Hello';

function helloWorld() {
  var b = 'World';
  return a + b;
}

console.log(b);

//Answer: B is defined within the function helloworld() and therefore is only accessible within the scope of that function. In this scenario you would only be able to call var a since the scope is outside of the function. 
