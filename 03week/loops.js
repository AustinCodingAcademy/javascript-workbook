'use strict';

var persons = {
  firstName: "Jane",
  lastName: "Doe",
  birthDate: "Jan 5, 1925",
  gender: "female"
};

function loops(){
  //1. Write For Loop
  for(var i=0 ; i<1001 ; i++){
  console.log(i);
}

  //2. Write For..In Loop
  var x;
  for(x in person){
    console.log(person[x]);
  }
  console.log(person.birthDate);

  //3. Write While Loop
  var i = 0;
    while (i <= 1000) {
      console.log(i);
      i++;
    }
    
  //4. Write Do While Loop
  do{
    console.log(1)
  }
  while(false);

}
