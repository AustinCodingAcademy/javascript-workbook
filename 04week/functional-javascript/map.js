function doubleAll(numbers) {
  // SOLUTION GOES HERE
  var dubs = numbers.map(doubleAll(numbers))
  return numbers * 2;


}

module.exports = doubleAll
