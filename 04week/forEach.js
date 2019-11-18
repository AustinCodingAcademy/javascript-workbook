


function forEach(array, fn){
  for(var i = 0; i < array.length; i++) {
    fn(array[i])
  }
}

let array1 = [2, 8, 16, 7, 90];

forEach(array1, console.log)