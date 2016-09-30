function Human(name, gender, hobby){
  this.name = name;
  this.gender = gender;
  this.hobby = hobby;

  this.planetaryOrigin = 'Earth';
  this.greeting = function(){
    return 'I am of the world';
  };
}

var newHuman = new Human('Sandra', 'female', 'dancing');
console.log(newHuman.name, newHuman.gender, newHuman.hobby, newHuman.planetaryOrigin, newHuman.greeting());

function randomInt(min, max){
  return Math.floor(Math.random() * (max - min));
}

console.log(randomInt(0, 100));

var genders = ['male', 'female', 'mixed-gender'];
var hobbies = ['yoga', 'biking', 'swimming', 'dancing', 'authentic relating'];
var austinTx = [];

for (var i = 0; i < 5; i++) {
  austinTx.push(new Human('bob', genders[randomInt(0, genders.length)], hobbies[randomInt(0, hobbies.length)]));

}
console.log(austinTx);

//
// var genders = ['Male', 'Female'];
// var hobbies = ['Surfing', 'Swimming', 'Sailing', 'Hiking', 'Running', 'Jumping', 'Reading', 'Sleeping'];
// var names = ['Hillary', 'Donald', 'Bernie', 'Jeb', 'Joe'];
//
// var austinTx = [];
//
// for (var i = 0; i < 1000; i++) {
//   austinTx.push(
//     new Human(
//       names[getRandomInt(0, names.length)],
//       genders[getRandomInt(0, genders.length)],
//       hobbies[getRandomInt(0, hobbies.length)]
//     )
//   );
// }
//
// austinTx;
