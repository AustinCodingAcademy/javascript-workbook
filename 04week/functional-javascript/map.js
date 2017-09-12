// function doubleAll(numbers) {
//       var result = []
//       for (var i = 0; i < numbers.length; i++) {
//         result.push(numbers[i] * 2)
//       }
//       return result
//     }
//
//     module.exports = doubleAll

function doubleAll(numbers) {
     // SOLUTION GOES HERE
     var result = [];
     numbers.map(function (num) {
       result.push(num * 2);
   });
   return result;
}
   module.exports = doubleAll
