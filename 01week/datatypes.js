const todaysDate = () => {
  return new Date();
}
console.log(todaysDate());

const numToString = (num) => {
  return String(num);
}
console.log(numToString(5));

const stringToNum = (str) => {
  return Number(str);
}
console.log(stringToNum('5'));

const varType = (info) => {
  return typeof info;
}
console.log(varType(6));
console.log(varType('hello'));
console.log(varType(undefined));
console.log(varType(NaN));
console.log(varType(true));
console.log(varType(null));

const addMe = (num1, num2) => {
  return (num1 + num2);
}
console.log(addMe(10, 20));

const isTrueAndTrue = (cond1, cond2) => {
  if (cond1 && cond2)
    return true;
}
console.log(isTrueAndTrue(1, 2));

const isTrueOrFalse = (cond1, cond2) => {
  if (cond1 || cond2)
    return true;
}
console.log(isTrueOrFalse(1, 2));

const isFalseAndFalse = (cond1, cond2) => {
  if (!cond1 && !cond2)
    return true;
}
console.log(isFalseAndFalse((5 < 2), false));




