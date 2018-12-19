let colors = ["red", "orange", "yellow", "pink"];

let doubleLColors = colors.filter((color, i, colorsArray) => {
  // if color has two ll's retrun true;
  return color.includes("ll");
});

console.log(doubleLColors);

let leftSide = ["black", "blue", "red", "blue", "pink", "blue"];
let rightSide = ["green", "purple", "red", "orange", "red", "yellow"];

let colorsBothSidesLike = leftSide.filter((color, i, colorsArray) => {
  // go one by one on leftSide and compare if its in rightSide
  console.log("here's what i'm running the function with right now", color);
  console.log(i);
  console.log(colorsArray);
  let found = false;
  let foundColor = rightSide.find(rightSideColor => {
    return rightSideColor === color;
  });
  if (foundColor) {
    found = true;
  }
  return found;
  // return rightSide.lastIndexOf(color) > -1;
  // return rightSide.includes(color);
});
console.log(colorsBothSidesLike);
