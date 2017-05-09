function loops(){
  //1. Write For Loop
  var carsInReverse = ["Honda", "Hyundai", "Toyota", "Nissan", "Buick", "Jeep", "Chevy", "Ford"];

  var x
for (i = 0; i < carsInReverse.length; ++i){
  console.log(carsInReverse[i]);
}
  //2. Write For..In Loop
  var persons = {firstName :'Jane',lastName: "Doe",birthDate: "Jan 5, 1925", gender: "female"
  };

  var x;

  for (x in persons){
    console.log(persons[x]);
  }


  //3. Write While Loop
var a = true;

while(a === true){
  console.log(a);
  a = false;
}


  //4. Write Do While Loop

  do{
    console.log(1);
  }

  while(true);

}
