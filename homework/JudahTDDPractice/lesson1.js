'use strict';

var assert = require('assert');
// Problem 0:
var myUndefined;
// Problem 1:
var myNull = null;
// Problem 2:
var myTrue = true;
// Problem 3:
var myFalse = false;
// Problem 4:
var myNumber = 5;
// Problem 5:
var myString = "hello";
// Problem 6:
var trueAndTrue = true;
// Problem 7:
var falseAndTrue = false;
// Problem 8:
var trueAndFalse = false;
// Problem 9:
var falseAndFalse = false;
// Problem 10:
var trueOrTrue = true;
// Problem 11:
var falseOrTrue = true;
// Problem 12:
var trueOrFalse = true;
// Problem 13:
var falseOrFalse = false;
// Problem 14:
var notFalse = true;
// Problem 15:
var notTrue = false;
// Problem 16:
var notNotTrue = true;

var bob = 'bob';
var emptyString = '';
// Problem 17:
var notNotBob = true;
// Problem 18:
var notNotEmptyString = false;
// Problem 19:
var notNull = true;
// Problem 20:
var notNotUndefined = false;
// Problem 21
var fourEqualTofour = true;
// Problem 22:
var fourNotEqualTofour = false;
// Problem 23:
var negativeThreeEqualToTen = false;
// Problem 24:
var negativeThreeLessThanTen = true;
// Problem 25:
var negativeThreeLessThanOrEqualToTen = true;
// Problem 26:
var negativeThreeGreaterThanTen = false;
// Problem 27:
var negativeThreeGreaterThanOrEqualToTen = false;
// Problem 28:
var stringFourEqualsNumberFour = true;
// Problem 29:
var stringFourNotEqualsNumberFour = false;
// Problem 30:
var stringFourStrictEqualsNumberFour = false;
// Problem 31:
var stringFourStrictNotEqualsNumberFour = true;
// ****
// Tests
// ****

describe('lesson 1 hw', function(){
  describe('data type problems', function(){
    describe('problem 0: myUndefined', function(){
      it('should be undefined', function(){
        assert.equal(typeof myUndefined, 'undefined');
      });
    });

    describe('problem 1: null', function(){
      it('should be that var null is set to null value', function(){
        assert(myNull === null);
      })
    })

    describe('problem 2: true', function(){
      it('should be that myTrue is set to true', function(){
        assert.equal(myTrue, true)
      })
    })

    describe('problem 3: false', function(){
      it('should be that myFalse equals false', function(){
        assert.equal(myFalse, false)
      })
    })

    describe('problem 4: myNumber', function(){
      it('should be that myNumber equals a number', function(){
        assert.equal(typeof myNumber, "number")
      })
    })

    describe('problem 5: myString', function(){
      it('should be a string', function(){
        assert.equal(typeof myString, "string");
      })
    })
  });

//========================================================//
  describe('boolean operators', function(){
    describe('problem 6: true && true', function(){
      it('should be true', function(){
        assert.equal(trueAndTrue, true&&true);
      })
    })

    describe('problem 7: false && true', function(){
      it('should be false', function(){
        assert.equal(falseAndTrue, false&&true);
      })
    })

    describe('problem 8: true && false', function(){
      it('should be false', function(){
        assert.equal(trueAndFalse, true&&false);
      })
    })

    describe('problem 9: false && false', function(){
      it('should be false', function(){
        assert.equal(falseAndFalse, false&&false);
      })
    })

    describe('problem 10: true || true', function(){
      it('should be true', function(){
        assert.equal(trueOrTrue, true || true);
      })
    })

    describe('problem 11: false || true', function(){
      it('should be false', function(){
        assert.equal(falseOrTrue, false || true);
      })
    })

    describe('problem 12: true || false', function(){
      it('should be true', function(){
        assert.equal(trueOrFalse, true || false);
      })
    })

    describe('problem 13: false || false', function(){
      it('should be false', function(){
        assert.equal(falseOrFalse, false || false);
      })
    })

    describe('problem 14: !false', function(){
      it('should be true', function(){
        assert.equal(notFalse, !false);
      })
    })

    describe('problem 15: !true', function(){
      it('should return false', function(){
        assert.equal(notTrue, !true);
      })
    })

    describe('problem 16: !!true', function(){
      it('should return true', function(){
        assert.equal(notNotTrue, !!true);
      })
    })
  })

  //======================================================//

  describe('Truthiness', function(){
    describe('problem 17: !!bob', function(){
      it('should be true', function(){
        assert.equal(notNotBob, !!bob);
      })
    })

    describe('problem 18: !!emptyString', function(){
      it('should be false', function(){
        assert.equal(notNotEmptyString, !!emptyString);
      })
    })

    describe('problem 19: !null', function(){
      it('should be true', function(){
        assert.equal(notNull, !null);
      })
    })

    describe('problem 20: !!undefined', function(){
      it('should be false', function(){
        assert.equal(notNotUndefined, !!undefined);
      })
    })
  });

  describe('comparison operators', function(){
    describe('problem 21: 4 === 4', function(){
      it('should be true', function(){
        assert.equal(fourEqualTofour, 4 === 4);
      })
    })

    describe('problem 22: 4 !== 4', function(){
      it('should be false', function(){
        assert.equal(fourNotEqualTofour, 4 !== 4);
      })
    })

    describe('problem 23: negativeThreeEqualToTen', function(){
      it('should be false', function(){
        assert.equal(negativeThreeEqualToTen, -3 === 10);
      })
    })

    describe('problem 24: negativeThreeLessThanTen', function(){
      it('should be true', function(){
        assert.equal(negativeThreeLessThanTen, -3 < 10);
      })
    })

    describe('problem 25: negativeThreeLessThanOrEqualToTen', function(){
      it('should be false', function(){
        assert.equal(negativeThreeLessThanOrEqualToTen, -3 <= 10);
      })
    })

    describe('problem 26: negativeThreeGreaterThanTen', function(){
      it('should be false', function(){
        assert.equal(negativeThreeGreaterThanTen, -3 > 10);
      })
    })

    describe('problem 27: negativeThreeGreaterThanOrEqualToTen', function(){
      it('should be false', function(){
        assert.equal(negativeThreeGreaterThanOrEqualToTen, -3 >= 10);
      })
    })

    describe('problem 28: "4" equals 4', function(){
      it('should be true', function(){
        assert.equal(stringFourEqualsNumberFour, "4" == 4);
      })
    })

    describe('problem 29: "4" does NOT equal 4', function(){
      it('should be false', function(){
        assert.equal(stringFourNotEqualsNumberFour, "4" != 4);
      })
    })

    describe('problem 30: "4" strict equals 4', function(){
      it('should be false', function(){
        assert.equal(stringFourStrictEqualsNumberFour, "4" === 4);
      })
    })

    describe('problem 31: "4" strict-not-equal to 4', function(){
      it('should be false', function(){
        assert.equal(stringFourStrictNotEqualsNumberFour, "4" !== 4);
      })
    })
  })




});


// describe('Lesson 1 Homework', function () {
//
//   describe('Data Type Problems', function () {
//     describe('Problem 0: undefined variable myUndefined', function () {
//       it('should be undefined', function () {
//           assert.equal(typeof myUndefined, 'undefined');
//       });
//     });
//   });
//
// });
