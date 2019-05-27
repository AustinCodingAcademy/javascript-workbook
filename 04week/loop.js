//Use a do...while loop to console.log the numbers from 1 to 1000.
var result = '';
var i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i <= 1000);

console.log(result);


//Create an object (an array with keys and values) called person with the following data:
var person = [{
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female"
  }
];

  //Use a for...in loop and if statement to console.log the value associated with the key birthDate if the birth year is an odd number.
  for ( let x in person) {
    console.log(person[x].birthDate)
    

    let k=new Date(person[x].birthDate);
    console.log(k);
    let year = k.getFullYear();
    if(year%2!=0){
        console.log(person[x].birthDate)
    };
  }

  //Create an arrayOfPersons that contains mulitiple objects.
  var arrayOfPerson = [{
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female"
  },
  {
    firstName: "Tre",
    lastName: "Ball",
    birthDate: "Feb 6, 1930",
    gender: "male"
  },
  {
    firstName: "Max",
    lastName: "Prince",
    birthDate: "Sep 15, 1965",
    gender: "male"
  }
];

//Use .map() to map over the arrayOfPersons and console.log() their information.
console.log(arrayOfPerson.map(x => x.firstName + x.lastName));

console.log(person.filter(x => x.gender !=='male'));

console.log(person.filter(x => new Date(x.birthDate) < new Date("Jan 1, 1990")));

//PROJECT 2

function isMale(x){
    return x.gender === 'male';
}
console.log(arrayOfPerson.find(isMale));

