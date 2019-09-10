let range = 0;
do {
  range += 1;
  console.log(range);
} while (range < 1000);

let person = {

firstName: "Jane",
lastName: "Doe",
birthDate: "Jan 5, 1925",
gender: "female"

}


  for (var birthDate in person) {
   if (person['birthDate'] % 2 !==0 ) {
     console.log(person['birthDate'])
     break;
   }
  }
  
let arrayOfPersons = {
firstName: "Jane",
lastName: "Doe",
birthDate: "Jan 5, 1925",
gender: "female",

firstName: "Alex",
lastName: "Munoz",
birthDate: "Mar 24, 1992",
gender: "female",

firstName: "Aaron",
lastName: "Valencia",
birthDate: "May 24, 1987",
gender: "female",
}

const newArray = arrayOfPersons.map(function)

console.log(arrayOfPersons);