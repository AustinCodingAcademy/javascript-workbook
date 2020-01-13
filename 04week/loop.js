let i = 1;
do {
    console.log(i);
    i++
} while (i <= 1000)

let person = {
    firstName: 'Jane',
    lastName: 'Doe',
    birthDate: 'Jan 5, 1925',
    gender: 'female'
};

for (key in person) {
    let lastYearNumber = person[key].charAt(person[key].length-1);
    if (key == 'birthDate' && lastYearNumber % 2 != 0) {
        console.log(person[key]);
    }
}

let persons = [
{
    firstName: 'Jane',
    lastName: 'Doe',
    birthDate: 'Jan 5, 1925',
    gender: 'female'
},
{
    firstName: 'Jim',
    lastName: 'Jones',
    birthDate: 'Mar 17, 1993',
    gender: 'male'
},
{
    firstName: 'Peyton',
    lastName: 'Manning',
    birthDate: 'Jul 12, 1972',
    gender: 'male'
},
{
    firstName: 'Jennifer',
    lastName: 'Smith',
    birthDate: 'Jan 18, 2000',
    gender: 'female'
},
{
    firstName: 'Carl',
    lastName: 'Jacobs',
    birthDate: 'Dec 31, 1998',
    gender: 'male'
},
];

//map()
let newPersons = persons.map(function(element) {
    return (`${element.firstName} ${element.lastName} was born on ${element.birthDate} and is a ${element.gender}`);
});

console.log(newPersons);

//filter() only males
let malesOnly = persons.filter(function(element) {
    return element.gender == 'male';
});

console.log(malesOnly);

//filter() people that were born before Jan 1, 1990
let pre1990 = persons.filter(function(element){
    if (Date.parse(element.birthDate) < Date.parse('Jan 1, 1990')) {
        return element;
    }
});

console.log(pre1990);