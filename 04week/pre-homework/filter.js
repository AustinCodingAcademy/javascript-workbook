// The .filter() method does exactly what it sounds like it would do. It iterates through an array and returns only values that follow a specified rule.
// The filter method is passed a callback function as its only parameter. The filter method returns a new array by passing each value in the original array
// into the callback function. If the callback function returns true or any truthy value, that value is included in the new array, but if the callback function
//  returns false or any falsy value, that value is not included in the new array. If all of the values passed into the callback function return a falsy value
//  , then the filter method returns an empty array: [].

// Let's look at an example of the filter method:

const colors = ['orange', 'red', 'blue', 'yellow', 'green', 'purple'];

  const sixOrMore = colors.filter((color) => {
    return color.length > 5;
  });
  
  console.log(sixOrMore); //=> ['orange', 'yellow', 'purple']