1. What is a function?
    Performs a specific task, sometimes has a name. Returns a value.
2. Explain the syntax for functions.
    Syntax: 
    function name(){}
    const name = function(){}
    const name = () => {}
3. What are closures?
    It's a feature in JS where an inner function has access to the outer (enclosing) functions variables and global variables - called scope chain.

    This allows a functino to carry its scope from another context or lexical scope. 

function outer() {
    var b = 10;
    var c = 100;
    function inner() {
        var a = 20; 
        console.log("a= " + a + " b= " + b);
        a++;
        b++;
    }
    return inner;
}
var X = outer();  // outer() invoked the first time
var Y = outer();  // outer() invoked the second time
//end of outer() function executions

X(); // X() invoked the first time
X(); // X() invoked the second time
X(); // X() invoked the third time
Y(); // Y() invoked the first time

4. How do you use scope when constructing functions?
    Variables declared within a function are local scope, outside a function are global. 

5. Why is it important to consider context in while you build functions?
    The context is related to the object to which the function belongs. It is most often used by using "this" keyword

6. What are decomposition method and how do you use them?
    It's a term that refers to breaking a larger problem into smaller problems

7. What are fat arrow functions?
    It's another way to write a function that was indroduced with ES6. They're technically anonymous functions, and can be assigned to variables.
    https://medium.freecodecamp.org/when-and-why-you-should-use-es6-arrow-functions-and-when-you-shouldnt-3d851d7f0b26