let fruit1 = {
  name: "apple",
  possibleColors: ("red", "yellow", "green"),
  size: "medium",
  manySeeds: true
};

let fruit2 = {
  name: "peach",
  possibleColors: ("orange", "yellow", "peach"),
  size: "medium",
  singleSeed: true
};

let fruit3 = {
  name: "watermelon",
  size: "extra large",
  manySeeds: true
};

let myFruits = [];
myFruits.push(fruit1);
myFruits.push(fruit2);
myFruits.push(fruit3);

printDescription(fruit1);
printDescription(fruit2);
printDescription(fruit3);

function printDescription(myFruit) {
  let seedSubstring = "";
  if (myFruit.singleSeed) {
    seedSubstring = "with a single seed";
  } else {
    seedSubstring = "with many seeds";
  }

  // console.log("I have " + myFruits.length + " fruits defined");
  console.log(
    "The " +
      myFruit.name +
      " is a " +
      myFruit.size +
      " sized fruit " +
      seedSubstring +
      ","
  );
}
