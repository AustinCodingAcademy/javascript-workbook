function reduce(arr, fn, initial) {
  var obj = initial;
  if (!arr.length) return obj;
  var head = arr[0];
  var index = 1;
  obj = fn(obj, head, index, arr);
  return  reduce(arr.slice(1), fn, obj);
}
//The REAL way
function reduce(arr, fn, initial) {
  return (function reduceOne(index, value) {
    if (index > arr.length - 1) return value // end condition
    return reduceOne(index + 1, fn(value, arr[index], index, arr)) // calculate & pass values to next step
  })(0, initial) // IIFE. kick off recursion with initial values
}

module.exports = reduce
