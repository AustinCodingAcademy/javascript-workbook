let groceries = ['bananas', 'apple', 'beef', 'spinach', 'milk', 'eggs'];

function myFunc(value, index) {
    console.log(value)
}

groceries.forEach(myFunc);
//////////////////////////////////////

let x = 2;
let myFunc2 = function(item, index) {
    if (index > x) {
        console.log(item, "is at position greater than", x);
    } else {
        console.log(item);
    }
}

groceries.forEach(myFunc2);