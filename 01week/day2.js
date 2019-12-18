//Takes in 2 inputs:
//x: the first number to add
//y: the second number to add
//Returns the sum of the first and seond numbers
let sum1 = (x, y) => {
    //Create variable z and assign value of x + y
    let z = x + y;
    return z;
}

function sum2(a, b, c) {
    let ab = a + b;
    console.log("The sum of the first 2 numbers is ", ab);

    let abc = ab + c;
    console.log("The sum of all 3 numbers is ", abc);
    return abc;
}

let sum3 = function(l, m,  n, o, p) {
    let lm = sum1(l,m);
    let nop = sum2(n,o,p);
    let finalSum = sum1(lm, nop);
    return finalSum;
}

console.log(sum1(12, 13));
console.log(sum2(8, 19, 3));
console.log(sum3(1, 1, 2, 3, 5));
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function foo() {
    console.log("I am foo");
}

function bar(a,b) {
    console.log("I am bar");
    console.log('The first input is', a);
    console.log('The second input is', b);
}

foo();

bar(1,2);
bar("Hello");
bar('hi','there','friend');
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function x(n) {
    if (n > 0) {
        return "p";
    } else {
        return "n";
    }
}

console.log(x(17));

let xyz = 100;

if (xyz > 100) {
    console.log("You made above 100");
} else if (xyz >= 90) {
    console.log('You did not make a hundred, but it was still an A')
} else {
    console.log("Ehh");
}

console.log("Program over");
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
