let cars = ['ford', 'chevy', 'dodge', 'honda'];
console.log(cars.length);

let morecars = ['fordy', 'chevvy', 'doddge', 'honda'];
let totalcars = cars.concat(morecars);
console.log(totalcars);

console.log(totalcars.indexOf('honda'));
console.log(totalcars.lastIndexOf('ford'));
