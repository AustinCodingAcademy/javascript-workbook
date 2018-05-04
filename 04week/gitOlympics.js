'use strict'

const arr = ['John', 'Jane', 'Tom', 'Jim', 'Tim'];
const printListOfOlympics = (arr) => {
  arr.forEach(function(item, index) {
    console.log(item, index);
  })
}
printListOfOlympics(arr);
