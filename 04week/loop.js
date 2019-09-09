// 1. Use a do...while loop to console.log numbers from 1 to 1000.
let result = "";
let i = 0;

do {
  i += 1;
  result += i;
} while (i < 1000);

console.log(result);

console.log("==================================================");

// 2. Create an object (an array with keys and values) called person with the following data:

person = {
  firstName: "Jane",
  lastName: "Doe",
  birthDate: "Jan 5, 1925",
  gender: "female"
};

for (key in person) {
  // if (person.birthDate[0] % 2) {
  console.log(person.birthDate);
}
// }
// console.log(person);
