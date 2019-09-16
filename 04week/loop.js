//Use a do...while loop to console.log the numbers from 1 to 1000.

let range = 0;
do {
  range += 1;
  console.log(range);
} while (range < 1000);

//Create an object (an array with keys and values) called person with the following data:

let person = {

firstName: "Jane",
lastName: "Doe",
birthDate: "Jan 5, 1925",
gender: "female"

}


//Use a for...in loop and if statement to console.log the value associated with the key birthDate if the birth year is an odd number.

  for (var birthDate in person) {
   if (person['birthDate'] % 2 !==0 ) {
     console.log(person['birthDate'])
     break;
   }
  }


//Create an arrayOfPersons that contains mulitiple objects. 
//You can simply copy/paste the person object you made above multiple times. 

let arrayOfPersons =[{
firstName: "Jane",
lastName: "Doe",
birthDate: "Jan 5, 1925",
gender: "female"},

{
firstName: "Alex",
lastName: "Munoz",
birthDate: "Mar 24, 1992",
gender: "female",
},

{
firstName: "Aaron",
lastName: "Valencia",
birthDate: "May 24, 1987",
gender: "male",
}]


//Use .map() to map over the arrayOfPersons and console.log() their information.

const newArray = arrayOfPersons.map(val => console.log(val));


//Use .filter() to filter the persons array and console.log only males in the array.

var gender = arrayOfPersons.filter(val => val.gender === "male")

console.log(gender)


//Use .filter() to filter the persons array and console.log only people that were born before Jan 1, 1990.

const before1990 = arrayOfPersons.filter(function(dob){

  var year = dob.birthDate.split(" ")[2]
  
  var count = parseInt(year, 10)
  
  return count < 1990
  
  })
  
  console.log(before1990)



