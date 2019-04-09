// PROMPT 
// Take an array of numbers
// raise them by the power of two (the number times itself)
// return the sum of the new array

// function powerUp(n) {
//     const powArray = [];
//     for (let i = 0; i < n.length; i++) {
//         pow = n[i] * n[i];
//         powArray.push(pow);
//     }
//     return powArray;
// }
// const returnAnswer = powerUp([2, 4, 6, 8]);
// console.log(returnAnswer);

// const loopThruArray = [2, 4, 6, 8].map(function(num) {
//     let pow = num * num;
//     return pow;
// });
// console.log(loopThruArray);

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