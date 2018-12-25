// Basic: Recursion
function reduce(arr, fn, initial) {
  // SOLUTION GOES HERE
  let temp = [...arr]; // create copy of arr to avoid mutation of input
  if (temp.length > 0) { // recursive step
    initial = fn(initial, temp[0]); // currect value to work on
    temp.shift(); // remove current item from temp (temp[0])
    return reduce(temp, fn, initial); // go again
  } else return initial; // end step
}

module.exports = reduce;
