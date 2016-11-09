//1. Identify and explain the problem in the code below:

// variable A declared;
var a = "Hello";

// hello world function declared 
function helloWorld() {
  // variable b declared
  var b = "World";

  // this return statement has access to both the innerscope of helloWorld and the outer scope of A because its a global scope. 
  return a + b;
}

// However here b is not within the global scope and the function is not called so therefore b will be undefined. 
console.log(b);
