var Array = [0, 4, 8, 2, 11, 16, 20, 10, 7, 3]

function doubleAll(numbers) {
  var result = []
  for (var i = 0; i < numbers.length; i++) {
    result.push(numbers[i] * 2)
  }
  return result
}

module.exports = doubleAll

/*
function doubleAll(numbers) {
      return numbers.map(function double(num) {
        return num * 2
      })
    }
*/
