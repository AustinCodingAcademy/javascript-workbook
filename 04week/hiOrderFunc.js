//Use a do...while loop to console.log the numbers from 1 to 1000.

i = 0;
do{
i++;
console.log(i)
}while(i >= 0 && i <= 1000)

/*Create an object (an array with keys and values) called person with the following data:
firstName: "Jane"
lastName: "Doe"
birthDate: "Jan 5, 1925"
gender: "female"
*/

const Person = {
  firstName: "Jane",
  lastName: "Doe",
  birthDate: "Jan 5, 1925",
  gender: "female"
};

//Use a for...in loop and if statement to console.log the value associated 
//with the key birthDate if the birth year is an odd number.
          
for (const property in Person){
    if(Person.birthDate % 3 === 0){
      console.log(Person.birthDate);
    }
}

/*Create an arrayOfPersons that contains multiple objects. 
You can simply copy/paste the person object you made above multiple times. 
Feel free to change the values to reflect multiple people you might have in your database.*/

const Person1 = {
  firstName: "John",
  lastName: "Smith",
  birthDate: "Feb 15, 1985",
  gender: "male"
};

const Person2 = {
  firstName: "Jim",
  lastName: "Beam",
  birthDate: "March 10, 1991",
  gender: "male"
};

const Person3 = {
  firstName: "Anna",
  lastName: "Bananna",
  birthDate: "Feb 23, 1993",
  gender: "female"
};

const arrayOfPersons = [Person1, Person2, Person3];

console.log(arrayOfPersons);

//Use .map() to map over the arrayOfPersons and console.log() their information.

const People = arrayOfPersons.map(x => x);

console.log(People);


//Use .filter() to filter the persons array and console.log only males in the array.

var newArray = arrayOfPersons.filter(function(el){
  if (el.gender === "male")
  return el;
});

console.log(newArray);

//Use .filter() to filter the persons array and console.log only people that were born before Jan 1, 1990.

var birthday = arrayOfPersons.filter(function(person){
  if (person.birthDate < "Jan 1, 1990")
  return person;
});


console.log(birthday);