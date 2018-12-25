// Task: Basics: Map
// Convert the following code from a for-loop to Array#map:

function doubleAll(numbers) {
  // SOLUTION GOES HERE
  let result = numbers.map(number => {
    return number * 2;
  });
  return result;
}

module.exports = doubleAll;
