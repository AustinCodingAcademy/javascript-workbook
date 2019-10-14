//numbers 1-1000 in do while loop

/* let x = "";
let i = 0;

do {
    x += "yo numba is " + i;
    i++;
} while (i <= 1000);

console.log(x); */

let person = {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female"
}

function forInLoop() {
    for (var i in person) {
        if (i === 'birthdate') {
            console.log(person[i])
        }
    }
}

forInLoop();

const arrayOfPersons = [
    {
        firstName: "Jane",
        lastName: "Doe",
        birthDate: "Jan 5, 1925",
        gender: "female"
    },

    {
        firstName: "Jane",
        lastName: "Doe",
        birthDate: "Jan 5, 1925",
        gender: "female"
    },

    {
        firstName: "Jane",
        lastName: "Doe",
        birthDate: "Jan 5, 1925",
        gender: "female"
    },

    {
        firstName: "Jane",
        lastName: "Doe",
        birthDate: "Jan 5, 1925",
        gender: "female"
    }
]

arrayOfPersons.map(function (items) {
    console.log(items);
})

function checkGender() {
    arrayOfPersons.filter(function (person) {
        if (person.gender === 'male') {
            //coment note console.log(person)
        }
    })
}

checkGender();

function checkAge() {
    arrayOfPersons.filter(function (person) {
        var lastIndex = person.birthDate.length - 1;
        var date = person.birthDate.slice(lastIndex - 4, lastIndex + 1)
        if (date <= 1990) {
            //comment note dose  console.log(person)
        }
    })

}
