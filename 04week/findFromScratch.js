//find() from scratch
const numbers = [5, 10, 6, 10, 17, 8, 13, 10, 6, 5, 9];

function find(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == element) {
            return `${element} was found in the array.`;
        }
    }
}

console.log(find(numbers, 10));



//findIndex() from scratch

let persons = [
    {
        firstName: "Jane",
        lastName: "Doe",
        birthDate: "Jan 5, 1925",
        gender: "female"
    },
    {
        firstName: "Rick",
        lastName: "James",
        birthDate: "May 17, 1956",
        gender: "male"
    },
    {
        firstName: "Jennifer",
        lastName: "Simons",
        birthDate: "Oct 12, 1997",
        gender: "female"
    },
    {
        firstName: "Connor",
        lastName: "Sundbeck",
        birthDate: "Jan 21, 1996",
        gender: "male"
    }
    ];

function findIndex(arr, key, element) {
    for (let j = 0; j < arr.length; j++) {
        if (arr[j][key] == element) {
            return `The first ${key} of ${element} appears at index ${j}`;
        }
    }
}

console.log(findIndex(persons, 'lastName', 'Simons'));