function loops(){
  //1. Write For Loop
  for(var i = 0; i<100; i++){
    console.log(i);
  };
  //2. Write For..In Loop
    var person = {};
    person.firstname = 'Bob';
    person.lastname = 'Bro';
    person.age = 25;
    console.log(person);
    var x;
    for (x in person){
      console.log(person[x]);
    };

  //3. Write While Loop
  var a = true;
  while(a === true){
  console.log(a);
  a = false;
  };
  //4. Write Do While Loop
  do{
  console.log(1);
  };
  while(false);
}
