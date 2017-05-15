//light recursion
function operation(){};

function repeat(operation, num) {
     // SOLUTION GOES HERE
  while(num>0){
    num --;
    return operation(repeat());
  }
}

   // Do not remove the line below
module.exports = repeat
