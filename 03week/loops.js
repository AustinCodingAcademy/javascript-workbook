'use strict';

function loops(){
  //1. Write For Loop
  var carsInReverse = ['red', 'blue', 'black'];
  for (var i = 0; i < carsInReverse.length; i++) {
    console.log(carsInReverse[i]);
  };

  //2. Write For..In Loop
  var persons = [firstName='Jane', lastName='Doe', birthDate='Jan 5, 1925', gender='female']
  for (var x in persons) {
    console.log(persons[x]);
  };
  for (var y in persons) {
    if (persons.hasOwnProperty(y)) {
      console.log(birthDate)
    }
  };

  //3. Write While Loop
  var i = 0;
  while (i <= 1000) {
    console.log(i);
    i++;
  };

  //4. Write Do While Loop
  var x = 0;
  do {
    console.log(x);
    x++;
  } while (x <= 1000);

};
