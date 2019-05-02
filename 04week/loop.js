"use strict";
//Accidently merged this PR. Write a line to re-create a PR
const person = {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female"
};

let arrayOfPersons = [{
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1989",
    gender: "female"
}, {
    firstName: "King",
    lastName: "Joe",
    birthDate: "May 5, 2000",
    gender: "male"
}, {
    firstName: "Nunu",
    lastName: "Nini",
    birthDate: "Feb 13, 1958",
    gender: "male"
},
{
    firstName: "Guli",
    lastName: "Ari",
    birthDate: "Oct 23, 1958",
    gender: "female"
}]


//do...while loop
function useDoWhile(num) {
    let i = 1;
    do {
        i++;
        console.log("now printing: " + i);
    } while (i < num + 1);
}

//for...in loop and if statement to console.log the value associated with 
//the key birthDate if the birth year is an odd number. 
function useForIn(inputObj) {
    for (let key in inputObj) {
        if (key == "birthDate") {
            console.log("Birthday is: " + inputObj[key])
            let bNum = String(inputObj[key]).split(" ");
            if (bNum[bNum.length - 1] % 2 == 0) {
                return 'Birth year is even number';
            } else {
                return 'Birth year is odd number';
            }
        }
    }
}

//Use .map() to map over the arrayOfPersons and console.log() their information.
function useMap(inputArr) {
    inputArr.map((obj) => {
        console.log(obj);
    });

}

//Use .filter() to filter the persons array and console.log only males in the array.
function useFilter1(inputArr) {
    inputArr.filter((obj) => {
        if (obj.gender == "male") {
            console.log(obj)
        }
    })
}

//Use .filter() to filter the persons array and console.log 
//only people that were born before Jan 1, 1990.
function useFilter2(inputArr) {
    inputArr.filter((obj) => {
        let bArr = String(obj.birthDate.split(","))
        let bYear = bArr.substring(bArr.length - 4)
        if (bYear < 1990) {
            console.log(obj)
        }
    })
}

//Calling function
console.log(useDoWhile(10));
console.log("******************************************");
console.log(useForIn(person));
console.log("******************************************");
console.log(useMap(arrayOfPersons));
console.log("******************************************");
console.log((useFilter1(arrayOfPersons)));
console.log("******************************************");
console.log(useFilter2(arrayOfPersons));