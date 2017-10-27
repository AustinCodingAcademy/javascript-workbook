'use strict'

//create a variable with several car makers
const carsInReverse ['toyota', 'honda', 'chevrolet', 'puegot']

//using forEach, console log the items inside the array carsInReverse
carsInReverse.forEach((item)=>{
  console.log(item);
});

carsInReverse;

//create an object with the personal information from assignment
const personalInfo = {
  firstName: "Jane",
  lastName: "Doe",
  birthDate: "Jan 5, 1925",
  gender: "female";
}

//create a for...in loop that prints out the contents of personalInfo
for (const prop in personalInfo) {
  console.log(`personalInfo.${prop} = ${personalInfo[prop]}`);
}
