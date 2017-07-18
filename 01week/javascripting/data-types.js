
function returnDate(){
  const date=new Date();
  return date;}

console.log(returnDate())


function NtoS() {
  const num = 7;
  const n = num.toString();
  return (n);
}

console.log(NtoS());

function stuff(){
  const s = parseInt('77');
  return (s);
}
console.log(stuff());


function add(){
  const sum = 3+4;
  return (sum);
}
console.log (add());



function twotrue(){
  const x=5
  const y=5
  if (x===y){
	  return('true');
  }

}
console.log(twotrue());

function onetrue(){
  const x2=5
  const y2='5'
  if (x2===5 && y2!==5){
	  return('1true');
  }
}
console.log(onetrue());

console.log(typeof x);
console.log(typeof y2);

function allfalse(){
  const x3=5
  const y3='5'
  if (x3!=='5' && y3!==5){
	  return('false');
  }
}
console.log(allfalse());
