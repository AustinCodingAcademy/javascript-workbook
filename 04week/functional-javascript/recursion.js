 function reduce(arr, fn, initial) {
      // SOLUTION GOES HERE
      return (function reducer(index, val){
      	if (index > arr.length -1) return val;
      		return reducer(index + 1, fn(val, arr[index], index, arr))
      })(0, initial)
    }

    module.exports = reduce