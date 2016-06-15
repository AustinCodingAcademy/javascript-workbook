'use strict';

var assert = require('assert');

// Given an array A, find the int that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.
var counter = 0;
var oddNum;

function findOdd(arr) {
  for (var i = 0; i<=arr.length -1; i++){
    for (var x = 0; x<=arr.length -1; x++){
      if (arr[i] === arr[x]){
        counter = counter + 1;
      }
    }
    if (counter % 2 != 0){
      oddNum = arr[i];
    }
    counter = 0;
  }
  return oddNum;
}
		// for(int i = 0; i < array.length; i++){
		// 	int count = 0;
		// 	for(int j = 0 ; j < array.length; j++){
		// 		if(array[i] == array[j]){
		// 			count++;
		// 		}
		// 	}
		// 	if(count % 2 == 1){
		// 		System.out.print(array[i] + " ");
		// 	}
		// }

    // Your code here


// Tests

describe('#findOdd()', function () {
    it('should find the int that appears an odd number of times', function () {
        assert.equal(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]), 5);
        assert.equal(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]), -1);
        assert.equal(findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5]), 5);
        assert.equal(findOdd([10]), 10);
        assert.equal(findOdd([1,1,1,1,1,1,10,1,1,1,1]), 10);
        assert.equal(findOdd([5,4,3,2,1,5,4,3,2,10,10]), 1);
    });
});
