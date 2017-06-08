//1. Write For Loop
  function loops() {
    var carsInReverse = ['Ferrari', 'Bentley', 'Lamborghini', 'Maserati'];
    for (i = 0; i < 4; i++) {
      console.log(carsInReverse[i]);
    }
  }

//2. Write For..In Loop
  var persons = {fname:"Jane", lname:"Doe", birthDate:"Jan 5, 1925", gender:"Female"};
    for (var i in persons) {
      console.log(i);
    }


//3. Write While Loop
  var i = 0;
  while (i <= 1000) {
    console.log(i);
    i++;
  }

//4. Write Do While Loop
  do {
    console.log(i);
    i++;
  }
  while (i < 1000);
