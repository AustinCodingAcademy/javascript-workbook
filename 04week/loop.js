alert("you've connected yo")
var result = '';
var i = 0;
do {
   i += 1;
   result += i + ' ';
} while (i > 0 && i < 1000); // Despite i == 0 this will still loop as it starts off without the test

console.log(result);

let person = {
  firstName: "Jane"
  lastName: "Doe" 
  birthDate: "Jan 5, 1925"
  gender: "female"
}

for (const prop in person) {
  console.log(`person.${prop} = ${person[prop]}`);
}
