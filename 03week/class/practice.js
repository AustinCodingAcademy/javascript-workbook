var cars = [{ make: 'audi', model: 'r8', year: '2012' }, { make: 'audi', model: 'rs5', year: '2013' }, { make: 'ford', model: 'mustang', year: '2012' }, { make: 'ford', model: 'fusion', year: '2015' }, { make: 'kia', model: 'optima', year: '2012' }],
    result = cars.reduce(function (accumulator, currentValue) {
        accumulator[currentValue.make] = accumulator[currentValue.make] || [];
        accumulator[currentValue.make].push(currentValue);
        return accumulator;
    }, Object.create(null));
console.log(result);

let blarb = [2, 4, 6, 8, 10].reduce(function(accumulator, currentValue, currentIndex, array) {
    console.log("accumulator: ", accumulator, "current val: ", currentValue, "Index: ", currentIndex, "array: ", array)
    return accumulator + currentValue;
  });
  console.log(blarb);