// Off of master create a new branch called 'ArrayOfCars'
    console.log("======Start of the Program=====")

// length
    // Create an array called cars which consists of 4 different types of cars. The first car type should be Ford.
    // Console.log the length of the array.
    myCars = ['Ford', 'Chrysler', 'Dodge'];
    console.log(myCars.length);

// concat
    // Create another array called more cars with 4 more different types of cars. The last car type should be Honda.
    myCars2 = ['Buick', 'Lincoln', 'Jeep', 'Honda'];
    // Use the concat method to combine the cars and moreCars arrays into an array called totalCars.
    let totalCars = myCars.concat(myCars2);
    console.log(totalCars);

// indexOf and lastIndexOf
    // Use the indexOf method to console.log the index of Honda.
    console.log(totalCars.indexOf("Honda"));
    // Use the lastIndexOf method to console.log the index of Ford.
    console.log(totalCars.lastIndexOf("Ford"));

// join
    // Use the join method to covert the array totalCars into a string called stringOfCars.
    let stringOfCars = totalCars.join();
    console.log(stringOfCars);

// split
    // Use the split method to convert stringOfCars back intro an array called totalCars.
    totalCars = stringOfCars.split(",");
    console.log(totalCars);

// reverse
    // Use the reverse method to create an array carsInReverse which is the array totalCars in reverse.
    let carsInReverse = totalCars.reverse();
    console.log(carsInReverse);

// sort
    // Use the sort method to put the array carsInReverse into alphabetical order.
    carsInReverse.sort();
    console.log(carsInReverse);
    // Based on the types of cars you used, predict which item in the array should be at index 0.
    let yourPrediction = "Buick"
    // Use the following code to confirm or reject your prediction: 
    console.log(carsInReverse.indexOf(['Buick']));
    // this one is not working, not sure what I am doing wrong
// slice
    // Use the slice method to remove Ford and Honda from the carsInReverse array and move them into a new array called removedCars.
    let removedCars = carsInReverse.slice(-4,-2);
    console.log(removedCars);
// splice
    // Use the splice method to remove the 2nd and 3rd items in the array carsInReverse and add Ford and Honda in their place.
    // array.splice(index, howmany, item1, ....., itemX)
    carsInReverse.splice(2,2,"Ford", "Honda");
    console.log(carsInReverse);
// push
    // Use the push method to add the types of cars that you removed using the splice method to the carsInReverse array.
    // array.push(item1, item2, ..., itemX)
    carsInReverse.push("Dodge", "Ford");
    console.log(carsInReverse);
// pops
    // Use the pop method to remove and console.log the last item in the array carsInReverse.
    console.log(carsInReverse.pop());
    console.log(carsInReverse);

// shift
    // Use the shift method to remove and console.log the first item in the array carsInReverse.
    console.log(carsInReverse.shift());
// unshift
    // Use the unshift method to add a new type of car to the array carsInReverse.
    carsInReverse.unshift("Tesla");
    console.log(carsInReverse);

// forEach
    // Create an array called numbers with the following items: 23, 45, 0, 2 Write code that will add 2 to each item in the array numbers.
    let numbers = [23,45,0,2];
    let summedNumbers = numbers.map(number => number + 2);
    console.log(summedNumbers);
    // .forEach() requires a function to be passed into it as its first argument. Build a function that will add 2 and then use .forEach() to pass each number into your freshly built function. 
    const numbers2 = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34];
    let summedNumbers2 = numbers2.map(number => number + 2);
    console.log(summedNumbers2);
