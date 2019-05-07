// .map() function that takes an array of items and a function that returns an array with each item manipulated by that function.
const arr = [1,2,3,9];
function map(array, callback) {
    let returnArray = [];
    for (let index = 0; index < array.length; index++) {
        let elements = callback(array[index]);
        returnArray.push(elements);
    }
    return returnArray;
}
const mapIt = map(arr, function(i) {
    let b = i * 2;
    return b;
});
// console.log(mapIt);

// .reduce() function that takes an array of food orders with their amounts and returns the total amount of all the food orders.
// var initialValue = 0;
// var sum = [{x: 1}, {x: 2}, {x: 3}].reduce(function (accumulator, currentValue) {
//     return accumulator + currentValue.x;
// },initialValue)
// console.log(sum)
const checkObject = [{price: 10},{price: 20},{price: 30}];
const checkArray = [10, 20, 30];
function reduce(array, callback, accumulator) {
    accumulator = accumulator || 0;
    console.log("This is the beginning acc: ",accumulator)
    for (let index = 0; index < array.length; index++) {
        console.log("Beginning array element",array[index])
        if(typeof array[index] == 'number') {
            console.log("Type number: ",typeof array[index])
            accumulator = accumulator + array[index];
            console.log("Number accumulator: ",accumulator)
        } else if(typeof array[index] == 'object') {
            console.log("Type object: ", typeof array[index])
            for(let i in array[index]){
                accumulator = accumulator + array[index][i];
                console.log("Object acc: ", accumulator)
            }
        }   
        // callback(accumulator, array[index], index, array);
    }
    return accumulator;
}
const sum = reduce(checkArray, function (a) {
    return a;
})
console.log("ANSWER: ",sum)

// .filter() function that takes an array of items and a function that returns an array with only the items that return true in the function.
// Answer: https://medium.com/@fredrikstrandoseberg/learning-javascript-deeply-understanding-filter-e462a2149c50
const anArray = [30, 40, 60, 90];
function filter(array, callback, thisObject) {
    let returnArr = [];
    let returnCallback = callback;
    if(thisObject) {
        returnCallback = callback.bind(thisObject);
    }
    for (var index = 0; index < array.length; index++) {
        if (returnCallback(array[index], index, array)) {
            returnArr.push(array[index]);
        }
    }
    return returnArr;
}
const filterIt = filter(anArray, function(i) {
    return i <= 60;
});
console.log(filterIt);