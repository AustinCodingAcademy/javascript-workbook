// this is a function that takes in two imputs
// x is the first number to add
// y is the escond number to add
// returns the sum of the firsta nd second integers


// Fiunction Type Syntax #1 

function sum1(x,y){
    // creates a new variable
    let z = x+y;
    return z;
}

// Fiunction Type Syntax #2


let sum2 = function(a,b,c){
    let ab = a+b;
    console.log("The sum of the first two numbers is", ab);

    let abc = ab+c;
    console.log("This is the sum of all three numbers", abc);
    return abc;

}

// Fiunction Type Syntax #3


let sum3 = (l,m,n,o,p) => {
    let lm = sum1(l,m);
    let nop = sum2(n,o,p);
    let finalSum = sum1(lm,nop);
    return finalSum;
}

let myVariable = sum1(12,13);
console.log("The sum of 12 and 13 is", myVariable);
console.log(sum3(1,1,2,3,5));





function foo()  {
    console.log("I am Foo");
}

function bar(a,b){
    console.log("I am Bar");
    console.log("The first imput is", a);
    console.log("THe ssecond imput is ", b);
}

foo();
bar(1,2);
bar("Hello");
bar("hi", "there", "friend");



// let x = function(n);
//     if(n > 0){
//         return "p";
//     } else {
//         return "n";
//     }
// }

// console.log(x(25));





let x = 95;

if(x > 100){
    console.log("you made a 100");
} else if (x>=90) {
    console.log("You got an A");
} else {
    console.log("You got less than a B");
}

console.log("Program Over");