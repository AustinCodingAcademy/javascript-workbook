console.log(Date());

const numberToString = (str) => {
return parseInt(str)
}
console.log(numberToString('9'))

console.log(Number('120'))


var x = Math.floor(( Math.random() * 100) + 1)
var d = Math.random()
var t = x + d;
console.log(t)

var e = (3 === 3) 
isTypeOf(e)

var z;
isTypeOf(z)

var y = null
console.log(y)

var c = 55;
isTypeOf(c)

var d = 0/0
// isTypeOf(d)
console.log(d)

var f = 'hello'
isTypeOf(f)


var firstThing = true
var secondThing = true

var myBoo = false;

function isTypeOf(data){
return console.log(typeof data)
}
function findingTheTruth(a, b){
if(a === true && b === true){
console.log('yay, they are both true')
} else if (a === true && b === false) {
console.log('booo')
} else if (a === false && b === false) {
console.log('good')
}
}

findingTheTruth(firstThing, secondThing)


let a = true 
let b = false

if(a && b){
console.log('All True')
} else if(a || b) {
console.log('One True, One False')
} else {
console.log('All False')
}

let ki = false
let bi = false

if(ki && bi){
console.log('All True')
} else if(ki || bi) {
console.log('One True, One False')
} else {
console.log('All False')
}

function displayDate(){
document.getElementById("sDate").innerHTML = Date();
}

