// Create a variable for current date to go into span on the HTML. Using toLocalString()
let mySpan = document.getElementById('theTime')
let now = new Date()

mySpan.innerText = now.toLocaleString()


// Make a click addEventListener to apply the 'now' variable. Using toLocaleDateString() method
mySpan.addEventListener('click', function(){
  mySpan.innerText = now.toLocaleDateString()
})