var inputText = document.getElementById("in");
var n = inputText.value
console.log(n)
var ramp = []
let counter = 0 


function ramping(nums){
  const numArr = nums.toString().split('');
let val = numArr[0]
for(let i = 1; i < numArr.length; i++){
  if (val > numArr[i]){
    return false
  } else  
    val = numArr[i]


}
return true;
}
// ramping(11234)


function other(n){
  for(let i = 0; i < n; i++){
    if(ramping(i))
  counter++

  }
  return "There are " +  counter + " ramping numbers in " + inputText.value ;
}
console.log(counter)

other(n)

function setMess(msg){
  document.getElementById('msg').innerText = msg;
  

}



  document.getElementById("btn").onclick = function(){
    ramping(inputText.value);
    setMess(other(inputText.value))
 
  
  }

  document.getElementById("clear").onclick = function(){
    setMess('')
    counter = 0
 
  
  }




