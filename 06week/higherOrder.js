'use strict';

const assert = require('assert');

function forEach(arr, callback) {
  // Your code here
  for(let i=0; i< arr.length; i++){
    let elementt = arr[i];
     callback(elementt)

}
}


  // Your code here
  let array = [99,87,23,67,13,77];
let gradeConverter = function(num){
  return num*num
}

let myMapImpl= function(arr,callback){
  let x = []
  for(let i=0; i< arr.length; i++){
    let elementt = arr[i];
    let p = callback(elementt)
    x.push(p)
  }
  return x
}

let converted = myMapImpl(array, gradeConverter)
console.log(converted)


  // Your code here
  let arrrray = [1,2,3,4,5];
let evenFilter = function(num){
  return num%2===0
};
let expected= [2,4]

function myFilterImpl(arr, callback){
  let savedOff = []
  for(let i = 0; i < array.length; i++ ){
    let element = arr[i]
    if(callback(element)===true){

      savedOff.push(element)
    }
  }
  return savedOff
}

let filtered = myFilterImpl(array,evenFilter)
console.log(myFilterImpl)



  // Your code here
  let some = function(arr, callback){
    for(let i = 0; i < arr.length; i++){
      let x = arr[i];
      if(callback(x)=== true){
        console.log('At least one fulfills the condition')

        return true

      } else{
        console.log('none fulfill the condition ')


      }
    }return false
  }


function every(arr, callback) {
  // Your code here
    for(let i = 0; i < arr.length; i++){
      let x = arr[i];
      if(callback(x)=== !true){
        console.log('not all meet the condition')

        return false

      } else{
        console.log('every one meets the condition')


      }
    }return true
  }



if (typeof describe === 'function') {

  describe('#forEach()', () => {
    it('should call the callback the array.length number of times', () => {
      let count = 0;
      forEach([1, 2, 3], () => {
        count++;
      });
      assert.equal(count, 3);
    });
  });

  describe('#map()', () => {
    const arr = [1, 2, 3];
    const mapped = map(arr, (num) => {
      return num * num;
    });
    it('should return new array with mapped items', () => {
      assert.deepEqual(mapped, [1, 4, 9]);
    });
    it('should not affect the original array', () => {
      assert.deepEqual(arr, [1, 2, 3]);
    })
  });

  describe('#filter()', () => {
    it('should return an array of items that pass the predicate test', () => {
      const filtered = filter([1, 2, 3], (num) => {
        return num % 2 === 0;
      });
      assert.deepEqual(filtered, [2]);
    });
  });

  describe('#some()', () => {
    let count = 0;
    const somed = some([1, 2, 3, 4], (num) => {
      count++;
      return num % 2 === 0;
    });
    it('should return true if at least one item passes the predicate test', () => {
      assert.equal(somed, true);
    });
    it('should stop at the first item that passes the predicate test', () => {
      assert.equal(count, 2);
    });
    it('should return false if no items pass the predicate test', () => {
      const somed = some([1, 3, 5], (num) => {
        return num % 2 === 0;
      });
      assert.equal(somed, false);
    });
  });

  describe('#every()', () => {
    it('should return true if at all passes the predicate test', () => {
      const everied = every([2, 4, 6], (num) => {
        return num % 2 === 0;
      });
      assert.equal(everied, true);
    });
    let count = 0;
    const everied = every([2, 3, 4, 5], (num) => {
      count++;
      return num % 2 === 0;
    });
    it('should return false if any item fails the predicate test', () => {
      assert.equal(everied, false);
    });
    it('should stop at the first item that fails the predicate test', () => {
      assert.equal(count, 2);
    });
  });

} else {

  console.log('Only run the tests on this one!')

}
