function doubleAll(numbers){
  let map = numbers.map(function(x) {
    return x * 2;
  })
  return map;
}
module.exports = doubleAll
