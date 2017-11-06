let carsInReverse = [ 'Honda', 'Audi', 'BMW', 'Acura', 'Saturn', 'Chevy', 'Mustang', 'Ford' ];

for (x=0; x<carsInReverse.length; x++){
  console.log(carsInReverse[x]);
}

let persons = {
  firstName: "Jane",
  lastName: "Doe",
  birthDate: "Jan 5, 1925",
  gender: "female"
};

for (let i in persons){
  console.log(persons[i]);
}

console.log(persons.birthDate);

let A = 1;

while (A<1001){
  console.log(A);
  A++;
}

let B = 1;

do {
  console.log(B);
  B++;
}
while (B<=1000);
