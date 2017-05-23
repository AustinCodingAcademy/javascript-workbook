'use strict';

var numbers =[1,2,3,4,5,6,7,8,9,10];


var even = function (num) {
return num % 2 === 0;
};
var filtered = numbers.filter(even);

console.log (filtered);
