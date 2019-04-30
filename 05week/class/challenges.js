// Given an array of numbers, raise each number by the power of 2 and return the sum of all the numbers that are evenly divisible by 4.
const myArr = [1, 5, 10, 4, 2] // => 120
const i = []
myArr.map(function(n) {
    n = n**2;
    if(n % 4 == 0){
        i.push(n);
    }
});
const addition = i.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
});
console.log(addition);

// How would you make this work?
function add(x, y){
    return x+y;
}
console.log(add(2, 5)); // 7

const add1 = function(z) {
    return function(w){
        return z + w;
    };
}
console.log(add1(2)(5)); // 7

const add2 = (e) => (f) => (e + f);
console.log(add2(2)(5));
