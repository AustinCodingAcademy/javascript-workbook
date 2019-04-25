// let i = 0;
// do {
//     i++;
//     console.log(i + '\n');
// } while (i < 1000);


const person = {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1920",
    gender: "female"
}
for (const allKeys in person) {
    // console.log("All Keys: ",allKeys);
    if (allKeys == 'birthDate') {
        const splitDate = person.birthDate.split('');
        console.log(splitDate)
        const lastElement = splitDate[splitDate.length - 1];
        if (lastElement % 2 !== 0) {
            console.log(person[allKeys]);
        } else {
            console.log("THIS IS AN EVEN DATE")
        }
    }
}