'use strict';

var assert = require('assert');
// Problem 0:
function alwaysFalse() {
  return false;
}
var alwaysTrue = function () {
  return true;
}
// Problem 1:
function equals(argument1, argument2) {
  if(argument1 === argument2){
    return true;
  }
  else{
    return false;
  }
}
// Problem 2:
function lessThanOrEqualTo(parameter1, parameter2) {
  if(parameter1 <= parameter2){
    return true;
  }
  else{
    return false;
  }
}
// Problem 3:
function add(number1, number2){
  return number1 + number2;
}
// Problem 4:
function addThree(number1, number2, number3){
  return add(number1, number2) + number3;
}
// Problem 5:
function isEven(number) {
  if(number % 2 === 0){
    return true;
  }
  else{
    return false;
  }
}
// Problem 6:
function isDivisibleByThree(number) {
  if(number % 3 === 0){
    return true;
  }
  else{
    return false;
  }
}
// Problem 7:
function whichSpecies(character) {
  if(character === 'scooby'){
    return 'dog';
  }
  else if(character === 'garfield'){
    return 'cat';
  }
  else if(character === 'nemo'){
    return 'fish';
  }
  else{
    return false;
  }
}
// Problem 8:
function testNumber(number){
  if(number % 4 === 0){
    return('divisible by 4');
  }
  if(number % 2 === 0){
    return('divisible by 2');
  }
  if(number % 3 === 0){
    return('divisible by 3');
  }
  if(number % 5 === 0){
    return('divisible by 5');
  }

}
// ****
// Tests
// ****
describe('lesson 2 hw', function(){
  describe('problem 0: alwaysFalse()', function(){
    it('should be false', function(){
      assert.equal(alwaysFalse(), false);
    })
  })

  describe('problem 0: alwaysTrue()', function(){
    it('should return true', function(){
      assert.equal(alwaysTrue(), true);
    })
  })

  describe('problem 1: equals()', function(){
    it('should return true when arg1 equals arg2, else return false', function(){
      assert.equal(equals(3,3), true);
      assert.equal(equals(3,null), false);
      assert.equal(equals('bob', ''), false);
      assert.equal(equals('bob', 'bob'), true);
    })
  })

  describe('problem 2: lessThanOrEqualTo', function(){
    it('should return true when arg1 is less than or equal to arg2, else return false', function(){
      assert.equal(lessThanOrEqualTo(3,3), true);
      assert.equal(lessThanOrEqualTo(3,4), true);
      assert.equal(lessThanOrEqualTo(3,1), false);
    })
  })

  describe('problem 3: add(number1, number2)', function(){
    it('should be defined and of type function', function(){
      assert(typeof add === 'function');
      assert(!(typeof add === 'undefined'))
    });

    it('should add 2 numbers and return result', function(){
      assert.equal(add(3,3), 6);
      assert.equal(add(3,7), 10);
    })
  })

  describe('problem 4: addThree(number1, number2, number3)', function(){
    it('should be defined and of type function', function(){
      assert(typeof addThree === 'function');
      assert(!(typeof addThree === 'undefined'));
    })

    it('should add 3 numbers and return result', function(){
      assert.equal(addThree(3,3,3), 9);
      assert.equal(addThree(4,4,4), 12);
    })
  })
});

describe('modulo % operator', function(){
  describe('problem 5: isEven(number)', function(){
    it('should return true if number is even, else false', function(){
      assert.equal(isEven(10), true);
      assert.equal(isEven(11), false);
    })
  })

  describe('problem 6: isDivisibleByThree(number)', function(){
    it('should return true if number divisible by 3, else false', function(){
      assert.equal(isDivisibleByThree(6), true);
      assert.equal(isDivisibleByThree(7), false);
    })
  })

  describe('problem 7: whichSpecies(character)', function(){
    it('should return "dog" when character is "scobby"', function(){
      assert.equal(whichSpecies('scooby'), 'dog');
    })
    it('should return "cat" when character is "garfield" ', function(){
      assert.equal(whichSpecies('garfield'), 'cat');
    })
    it('should return "fish" when character is "nemo" ', function(){
      assert.equal(whichSpecies('nemo'), 'fish');
    })
    it('should return false if character is anything else', function(){
      assert.equal(whichSpecies('superman'), false);
    })
  })

  describe('problem 8: testNumber(number)', function(){
    it('should be defined and of type function', function(){
      assert(typeof testNumber === 'function');
      assert(!(typeof testNumber === 'undefined'));
    });
    it('should return "divisible by 4 when number is divisible by 4"', function(){
      assert.equal(testNumber(12), 'divisible by 4');
    })
    it('should return "divisible by 2" when number is divisible by 2', function(){
      assert.equal(testNumber(10), 'divisible by 2');
    })
    it('should return "divisible by 3" when number is divisible by 3', function(){
      assert.equal(testNumber(9), 'divisible by 3');
    })
    it('should return "divisible by 5" when number is divisible by 5', function(){
      assert.equal(testNumber(25), 'divisible by 5');
    })
  })

});
