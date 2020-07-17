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

const dosPeeps = [
    {
        firstName: "Jack",
        lastName: "Jacob",
        birthDate: "Jun 5, 1967",
        gender: "male"
    },

    {
        firstName: "Daniel",
        lastName: "Don",
        birthDate: "Aug 19, 2000",
        gender: "male"
    },

    {
        firstName: "Jill",
        lastName: "Fair",
        birthDate: "Apr 9, 1989",
        gender: "female"
    },

    {
        firstName: "Lexi",
        lastName: "Chirp",
        birthDate: "Oct 12, 1990",
        gender: "female"
    }
]

dosPeeps.map(function (items) {
    console.log(items);
})

function checkGender() {
    dosPeeps.filter(function (person) {
        if (person.gender === 'male') {
            //coment note console.log(person)
        }
    })
}

checkGender();

function checkAge() {
    dosPeeps.filter(function (person) {
        var lastIndex = person.birthDate.length - 1;
        var date = person.birthDate.slice(lastIndex - 4, lastIndex + 1)
        if (date <= 1990) {
            //comment note dose  console.log(person)
        }
    })

}
