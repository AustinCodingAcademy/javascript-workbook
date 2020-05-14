'use strict'
let Person1 = {
    firstName: 'Jane',
    lastName: 'Doe',
    birthYear: 1925,
    gender: 'female'
}
let x = Person1.birthYear
function isOdd(x) {
    if (x%2 !== 0){
        return x;
    }
}
for (Person1[2] in Person1) {
    if (isOdd(x) == x) {
        console.log(isOdd(x));
    }
};
let Person2 = {
    firstName: 'Jim',
    lastName: 'Boyo',
    birthYear: 1928,
    gender: 'male'
};
let Person3 = {
    firstName: 'Chad',
    lastName: 'Volnie',
    birthYear: 1991,
    gender: 'male'
};

let arrayOfStudents = [Person1, Person2, Person3];
let mapFunction = function(element, index) {
    return ` Name is: ${element.firstName} ${element.lastName}      Birth date: ${element.birthYear}    gender: ${element.gender}`;
};
let map = arrayOfStudents.map(mapFunction);
console.log(map);

let isMaleFilter = function(element, index) {
    if (element.gender == 'male') {
        return true;
    } else {
        return false;
    }
}
let isMale = arrayOfStudents.filter(isMaleFilter);
console.log('The Males are as follows:', isMale)

let birthYearFilter = function(element, index) {
    if (element.birthYear < 1990) {
        return true;
    } else {
        return false;
    }
}
let birthYear = arrayOfStudents.filter(birthYearFilter);
console.log('The people born before Jan 1, 1990 is as follows:', birthYear)