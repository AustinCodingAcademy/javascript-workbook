function loops(){
  //1. Write For Loop
  var months =['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

for(var i=0; i<months.length; i++) {
  console.log(months[i]);
}

  //2. Write For..In Loop
  var animal={Animal:'Cat', Breed:'Burmese', Gender: 'Female', age:3, date: 'Jan 21'}

  console.log(animal);

  var x;

  for(x in animal) {
    console.log(x);

  }


  //3. Write While Loop
  var e = 0;

  while (e < 1000) {
    e++;
  console.log(e);
  }


  //4. Write Do While Loop
  var m=0;
    do {
       m++;
      console.log(m + ` ` + `is the new number`+ `\n`);
    } while (m < 1000); 

}
loops();
