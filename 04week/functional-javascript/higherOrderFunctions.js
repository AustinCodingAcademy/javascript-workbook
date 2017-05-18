function repeat(operation, num) {
  // SOLUTION GOES HERE
  let x = 0;
  operation(x)
  if (x >= num) {
    return;
  } else {
    operation(x + 1);
  }
}

// Do not remove the line below
module.exports = repeat
