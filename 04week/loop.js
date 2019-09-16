let i = 1;
do {
  console.log(i);
  i++;
}
while (i <= 1000);


let person = {
  firstName: "Jane",
  lastName: "Doe",
  birthDate: "Jan 5, 1925",
  gender: "female"
}


for (birthDate in person) {
  if (birthDate % 2 !== 0){
    console.log(person.birthDate);
    break;
  }
}


