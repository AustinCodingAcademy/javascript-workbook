// http://awanderingreader.com/javascript-under-the-hood-building-our-own-foreach-and-map-functions/

// Challenge 3
function map(array, callback) {
    var newArr = [];
    for (var i = 0; i < array.length; i++) {
      newArr.push(callback(array[i]));
    }
    return newArr;
}
  
function multiplyByTwo(num) {
return num * 2;
}
console.log(map([1, 2, 3], multiplyByTwo));
/////////////////////////////

// Challenge 4
function forEach(array, callback) {
	for(let i = 0; i < array.length; i++) {
		callback(array[i]);
	}
}
// //Extension 1
// function mapWith(array, callback) {
// 	return forEach(array, callback)
// }
// see for yourself if your forEach works!
var alphabet = '';
var letters = ['a', 'b', 'c', 'd'];

forEach(letters, function(char) {
  alphabet += char;
});
console.log(alphabet);   //prints 'abcd'