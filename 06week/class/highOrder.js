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
console.log("Mapped Value: ",mapIt);

// .reduce() function that takes an array of food orders with their amounts and returns the total amount of all the food orders.
// var initialValue = 0;
// var sum = [{x: 1}, {x: 2}, {x: 3}].reduce(function (accumulator, currentValue) {
//     return accumulator + currentValue.x;
// },initialValue)
// console.log(sum)
const checkObject = [{price: 10},{price: 20},{price: 30}];
const checkArray = [10, 20, 30];
function reduce(array, accumulator) {
    accumulator = accumulator || 0;
    for (let index = 0; index < array.length; index++) {
        if(typeof array[index] == 'number') {
            accumulator = accumulator + array[index];
        } else if(typeof array[index] == 'object') {
            for(let i in array[index]){
                accumulator = accumulator + array[index][i];
            }
        }   
    }
    return accumulator;
}
const sum = reduce(checkArray, 10); // Set accumulator to 10
console.log("Reduced Value: ",sum);

// .filter() function that takes an array of items and a function that returns an array with only the items that return true in the function.
// Answer: https://medium.com/@fredrikstrandoseberg/learning-javascript-deeply-understanding-filter-e462a2149c50
const anArray = [30, 40, 60, 90];
const arrObj = [
    { id: 15 },
    { id: 1 },
    { id: 0 },
    { id: 3 },
    { id: 12 },
    { },
    { id: 3 },
    { id: 17 },
    { id: 'undefined' }
  ];
function filter(array, callback, thisObject) {
    var filteredArray = [];
    var filterCallback = callback;
    if (thisObject) {
        filterCallback = callback.bind(thisObject);
    }
    for (let index = 0; index < array.length; index++) {
        if(typeof array[index] == 'number') {
            if (filterCallback(array[index], index, array)) {
                filteredArray.push(array[index]);
            }
        } else if(typeof array[index] == 'object') {
            for(let i in array[index]){
                if (filterCallback(array[index][i], index, array)) {
                    filteredArray.push(array[index][i]);
                }
            }
        }   
    }
    return filteredArray;
}
const filterIt = filter(anArray, function(i) {
    return i <= 60;
});
console.log("Filtered Value: ",filterIt);