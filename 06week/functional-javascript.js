function upperCaser(input) {
    // SOLUTION GOES HERE
    return input.toUpperCase();
  }

  module.exports = upperCaser

  function repeat(operation, num) {
    // SOLUTION GOES HERE
    for (let i = 0; i < num; i++){
        operation()
    }
  }

  // Do not remove the line below
  module.exports = repeat

  function doubleAll(numbers) {
    // SOLUTION GOES HERE
    
  }

  module.exports = doubleAll