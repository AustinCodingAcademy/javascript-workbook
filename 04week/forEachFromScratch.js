let arr1 = ['a', 'b', 'c']

function forEachFromScratch (arr, fn) {
  // your code here
  // use for loop to iterate over the array parameter
  // for every iteration call the function parameter with the current value in the array, 
  // the current index in the array, and the current array
  }
  
  // syntax on how we will call our custom function
  forEachFromScratch(arr1, function (element, i, arr) {
    console.log(element, i);
    console.log(arr);
  
    /* 
    expected output:
    
    > "a" 0
    > Array ["a", "b", "c"]
    > "b" 1
    > Array ["a", "b", "c"]
    > "c" 2
    > Array ["a", "b", "c"]
    */
  })